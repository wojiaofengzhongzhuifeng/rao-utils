// import {convertData} from '../index';
let test1 = require('../index');
let {convertData} = test1;

test('convert 函数正常-接受数组作为 keyMap', ()=>{
  let dataFromInterface = [{
    "name": "irTagDocument",
    "left": "tags",
    "right": "documents",
    "ratio": null,
    "userDefined": false,
    "relType": "功能位置/物项-文档",
    "collection": "tag_document",
    "parentKey": "relationship"
  }, {
    "name": "uirTagDocumentNoSon",
    "left": "tags",
    "right": "documents",
    "ratio": null,
    "userDefined": true,
    "relType": "不是儿子1",
    "collection": "uirTagDocumentNoSon",
    "parentKey": "relationship"
  }, {
    "name": "uirTagDocumentSon",
    "left": "tags",
    "right": "documents",
    "ratio": null,
    "userDefined": true,
    "relType": "文档儿子",
    "collection": "tag_document",
    "parentKey": "irTagDocument"
  }];
  let keyMapList = [
    ['collection', 'collection1'],
    ['relType', 'title'],
    ['name', 'value'],
    ['name', 'key'],
  ]
  let convertResult = convertData(dataFromInterface, keyMapList);
  let result =   [
    {title: '功能位置/物项-文档', value: 'irTagDocument', key: 'irTagDocument', collection1: 'tag_document'},
    {title: '不是儿子1', value: 'uirTagDocumentNoSon', key: 'uirTagDocumentNoSon', collection1: 'uirTagDocumentNoSon'},
    {title: '文档儿子', value: 'uirTagDocumentSon', key: 'uirTagDocumentSon', collection1: 'tag_document'},
  ]
  expect(convertResult).toEqual(result);
})