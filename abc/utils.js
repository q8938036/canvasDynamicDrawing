/**
 * @description 计算多个点之间的数据（每两点100个点）
 * @param {Array} vertices [[x1,y1],[[x2,y2],...]
 */
const calcWaypoints = (vertices)=>{
  var waypoints = [];
  for (var i = 1; i < vertices.length; i++) {
      var pt0 = vertices[i - 1];
      var pt1 = vertices[i];
      var dx = pt1[0] - pt0[0];
      var dy = pt1[1]- pt0[1];
      for (var j = 0; j < 60; j++) {
          var x = pt0[0] + dx * j / 60;
          var y = pt0[1] + dy * j / 60;
          waypoints.push([x,y]);
      }
  }
  return (waypoints);
}

/**
 * @description 动态画线
 * @param {Array} points 需要画的100个点坐标
 * @param {Number} t   已画点数
 */
const animate = (ctx,points,t)=>{
  if (t < points.length - 1) {
      requestAnimationFrame(function(){animate(ctx,points,t)});
      // draw a line segment from the last waypoint
      // to the current waypoint
      ctx.beginPath();
      ctx.moveTo(points[t - 1][0], points[t - 1][1]);
      ctx.lineTo(points[t][0], points[t][1]);
      ctx.stroke();
      // increment "t" to get the next waypoint 
  }
  t++;
}

/**
 * @description 把角度转换为弧度
 * @param {Number} angle 角度
 */
const angleToRadian = angle=> {
  return Math.PI / 180 * angle;
}

/**
 * @description 延迟方法
 * @param {Number} time 延迟时间ms
 * @param {Function} callback 回掉函数
 */
async function delay(time,callback) {
  let arg = [...arguments].slice(2)
  return new Promise(res=>{
    setTimeout(()=>{
      callback(...arg)
      res()
    },time)
  })
}

/**
 * @description 画点画线方法
 * @param {Object} context canvas
 * @param {Array} list 数据
 * @param {String} type point line
 * @param {Number} scale 放大倍数
 * @param {Number} px 水平偏移量
 * @param {Number} py 纵向偏移量
 */
const drawPointAndLines = (context,list,type,scale=1,px=0,py=0)=>{
  context.beginPath();
  context.strokeStyle = "#FFFFFF"
  if (type == 'point') {
    list.map((item)=>{
      context.arc(item[0]*2*scale, item[1]*2*scale, 10, 0, Math.PI *2)
      context.fillStyle = "rgba(255,255,255,0.5)";
      context.closePath()
    })
    context.fill()
  } else {
    list.map((item)=>{
      let news = []
      item.map((line,index)=>{
        line[0] = line[0]*2*scale+px
        line[1] = line[1]*2*scale+py
        news.push(line)
        // if (index) {
        //   context.strokeStyle = "#FFFFFF"
        //   context.lineTo(line[0]*2*scale+px,line[1]*2*scale+py)
        // } else {
        //   context.moveTo(line[0]*2*scale+px,line[1]*2*scale+py)
        // }
      })
      let points = calcWaypoints(news);
      let t = 1
      animate(context,points,t);
      // context.stroke()
    })
  }
}

// module.exports = {
//   calcWaypoints,
//   animate,
//   angleToRadian,
//   delay,
//   drawPointAndLines
// }