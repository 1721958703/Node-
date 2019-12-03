//cpu的数据
var _ = require('lodash');
var ps = require('current-processes');
 var blessed = require('blessed')
, contrib = require('blessed-contrib')


setInterval(()=>{
    ps.get(function(err, processes) {
 
    var sorted = _.sortBy(processes, 'cpu');
    var top5  = sorted.reverse().splice(0, 5);
    let xData=top5.map(item=>{
        return item.cpu
    })
    //曲线
    screen = blessed.screen()
    , line = contrib.line(
        { style:
          { line: "yellow"
          , text: "green"
          , baseline: "black"}
        , xLabelPadding: 3
        , xPadding: 5
        , label: 'Title'})
    , data = {
        x: ['t1', 't2', 't3', 't4'],
        y: xData
     }
    screen.append(line) //must append before setting data
    line.setData([data])
    
    screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
    });
    
    screen.render()


});
},1000)






