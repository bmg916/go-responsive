  $(document).ready(function(){

    var chartObj = [{
        "cId": "#int-trends",
        "cType": "line",
        "cData": {
          labels : ["2010","2011","2012","2013","2014","2015"],
          datasets : [
            {
              fillColor : "rgba(221,39,49,0.5)",
              strokeColor : "rgba(221,39,49,1)",
              data : [1370,1400,1480,1510,1700,1720]
            },
            {
              fillColor : "rgba(0,71,204,1)", // #0047cc
              strokeColor : "rgba(0,71,204,1)",
              data : [1000,1170,1350,1500,1750,2000]
            }
          ]
        },
        "options":{
          scaleOverride : true,
          scaleSteps : 6,
          scaleStepWidth : 400,
          scaleStartValue : 0,
          scaleLineWidth: 4
        }
        }];

      // Call the responsive plugin
      $.respCharts(chartObj);

    });

    // chartObj = [{
    //     "cId": "#int-trends",
    //     "cType": "line",
    //     "cData": {
    //       labels : ["2007","2008","2009","2010","2011","2012","2013","2014","2015"],
    //       datasets : [
    //         {
    //           fillColor : "rgba(221,39,49,0.5)",
    //           strokeColor : "rgba(221,39,49,1)",
    //           data : [1200,1275,1325,1370,1400,1480,1510,1700,1720]
    //         },
    //         {
    //           fillColor : "rgba(151,187,205,0.5)",
    //           strokeColor : "rgba(151,187,205,1)",
    //           data : [400,545,795,1000,1170,1350,1500,1750,2000]
    //         }
    //       ]
    //     },
    //     "cOptions":{
    //       scaleOverride : true,
    //       scaleSteps : 6,
    //       scaleStepWidth : 400,
    //       scaleStartValue : 0,
    //     }
    //     }];

    //   // Call the responsive plugin
    //   $.respCharts(chartObj);

    // });
