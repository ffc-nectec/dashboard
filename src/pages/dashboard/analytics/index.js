import React from 'react'
import { Helmet } from 'react-helmet'
import Chart1 from 'components/widgets/Charts/1'
import { AutoComplete, Button, Icon, Input } from 'antd';
import Chart2 from 'components/widgets/Charts/2';
import Chart3 from 'components/widgets/Charts/3';
import General2 from 'components/widgets/General/2'

class DashboardAnalytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      pyramid01: [],
      chronic: [],
      user: [],
      hospital: '',
      isLoaded: false,
      error: null,
    }
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  componentDidMount() {

    // ชื่อกับ id
    fetch(`https://report-api.ffc.in.th/report/convert`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          dataSource: json
        });
      })

    // กราฟ ปิรามิด
    fetch(`https://report-api.ffc.in.th/report/pyramid`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          pyramid01: json,
          isLoaded: true,
        });
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    // pie อัตราส่วนผู้สูงอายุ
    fetch(`https://report-api.ffc.in.th/report/elderlyrat`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          user: json,
          isLoaded: true
        });
      })

    // piechart โรคเรื้อรัง
    fetch(`https://report-api.ffc.in.th/report/chronic`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          chronic: json,
          isLoaded: true
        });
      })
  }

  handleValidSubmit(value) {
    const { dataSource } = this.state;
    const organization = dataSource.find((item) => {
      return item.name === value
    })
    if (organization !== undefined) {
      const idOption = organization.id
      console.log(idOption, 'ooooo');
      const rnd = Math.floor(Math.random() * 1000);
      fetch(`https://report-api.ffc.in.th/report/pyramid/${idOption}?rnd=${rnd}`)
        .then(res => res.json())
        .then(json => {
          this.setState({
            pyramid01: json,
            hospital: value
          });
          console.log(json, '====');
        })

      fetch(`https://report-api.ffc.in.th/report/elderlyrat/${idOption}?rnd=${rnd}`)
        .then(res => res.json())
        .then(json => {
          this.setState({
            user: json,
            hospital: value
          });
        })

      fetch(`https://report-api.ffc.in.th/report/chronic/${idOption}?rnd=${rnd}`)
        .then(res => res.json())
        .then(json => {
          this.setState({
            chronic: json,
            hospital: value
          });
        })
    }
  }

  render() {
    const { dataSource, chronic, pyramid01, user, hospital, isLoaded, error } = this.state;
    const name = dataSource.map(object => object.name);
    const peplelength = name.length
    const submit = this.handleValidSubmit;

    function Complete() {
      return (
        <AutoComplete
          style={{ width: 350, Color: '#000' }}
          onChange={submit}
          dataSource={name}
          defaultValue={hospital}
          placeholder="ค้นหาหน่วยงาน"
          filterOption={(inputValue, option) =>
            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        >
          <Input suffix={<Icon type="search" className="certain-category-icon" />} />
        </AutoComplete>
      );
    }

    function refreshPage() {
      window.location.reload();

    }
    if (error) {
      return <div>Error: {error.message}</div>;
    } if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {isLoaded}
        <Helmet title="Dashboard: Analytics" />
        <div>
          <Complete />&nbsp; &nbsp; &nbsp;
          <Button type="button" onClick={refreshPage}> <span>หน่วยงานทั้งหมด</span> </Button>
        </div>
        <br /><br /><br />
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <Chart1 submit={submit} pyramid01={pyramid01} namehospital={hospital} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-12">
            <div className="card">
              <div className="card-body">
                <General2 length={peplelength} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="card">
              <div className="card-body">
                <Chart3 chronic={chronic} submit={submit} namehospital={hospital} />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-body">
                <Chart2 user={user} submit={submit} namehospital={hospital} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardAnalytics
