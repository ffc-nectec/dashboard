import React from 'react'
import { Helmet } from 'react-helmet'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Table, Collapse } from 'antd';

const { Panel } = Collapse;

class Chronicpiechart extends React.Component {

    render() {
        const {chronic, submit, namehospital } = this.props
        const piechronic = chronic.byIcd10
       
        function callback(key) {
            console.log(key);
          }

        if (piechronic !== undefined) {
            const chronicpiechart = piechronic.map(object => ({
                name: object.name,
                y: object.y,
            }));

            const chronicslice = chronicpiechart.slice(0,20)
            const columns = [
                {
                    title: 'ชื่อ',
                    dataIndex: 'name',
                    key: '1',
                },
                {
                    title: 'จำนวน',
                    dataIndex: 'y',
                    key: '1',
                    render: (value) => {
                        return <span>{value.toLocaleString('en-US')}</span>;
                    },
                },
            ];

            Highcharts.setOptions({
                lang: {
                    thousandsSep: ','
                }
            });
            const pieChartchronics = {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                    style: {
                        fontFamily: "'Kanit', sans-serif"
                    }
                },
                credits: {
                    enabled: false
                },
                colors: ['rgb(144, 237, 125)', 'rgb(247, 163, 92)', '#FF4560', '#333333', '#008FFB'],
                title: {
                    // text: `ผู้ป่วยโรคเรื้อรัง</br></b><br/>${hospital}`
                    text: namehospital !== '' ? `จำนวนผู้ป่วยโรคเรื้อรังแยกตามรายโรค</b></br><br/>${namehospital}` : 'จำนวนผู้ป่วยโรคเรื้อรังแยกตามรายโรค',
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        // showInLegend: true
                    }
                },
                series: [{
                    name: 'จำนวน',
                    colorByPoint: true,
                    data: chronicslice
                }]
            }
           
            return (
              <div>
                <HighchartsReact highcharts={Highcharts} options={pieChartchronics} onChange={submit} style={{ width: "100%", height: "400px" }} />
                <Collapse onChange={callback}>
                  <Panel header="จำนวนผู้ป่วยโรคเรื้อรังแยกตามรายโรค(กดดูรายละเอียด)" key="1">
                    <Table dataSource={chronicpiechart} columns={columns} bordered />
                  </Panel>
                </Collapse>
              </div>
            )
        }
        return (
          <div>
            <Helmet title="Dashboard: Analytics" />
          </div>
        )
    }
}

export default Chronicpiechart
