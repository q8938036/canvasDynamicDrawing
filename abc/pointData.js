/**
 *@description 黄金三角数据
 *@param pointList 关键点
 *@param lineList 线条数据
*/
const pointList = {
  'three':[
    [283,211],
    [352,205],
    [404,201],
    [371,299],
  ],
  'other':[
    [171,282],
    [232,388],
    [362,433],
    [417,380],
    [463,243],
  ]
}
const lineList = {
  'three':[
    [[352,205],[371,299],[362,433]],
    [[283,211],[352,205],[404,201],[371,299],[283,211]]
  ],
  'other':[
    [[171,282],[463,243]],
    [[232,388],[417,380]],
    [[362,433],[232,388],[171,282],[371,299]],
    [[362,433],[417,380],[463,243],[371,299]],
  ]
}
/**
 *@description 气韵测试
 *@param pointList 关键点
 *@param lineList 线条数据
*/
const scaleList= [
  [[227,185],[257,176]],
  [[257,176],[325,182]],
  [[325,182],[329,165]],
  [[329,165],[246,161]],
  [[246,161],[227,185]],
  [[329,185],[227,161]]
]
const boxList = [
  [[227,161-50],[227,185+50]],
  [[329,161-50],[329,185+50]],
  [[329+30,161],[246-30,161]],
  [[246-30,185],[329+30,185]],
]

// module.exports = {
//   pointList,
//   lineList,
//   scaleList,
//   boxList
// }