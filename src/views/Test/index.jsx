

// 封装input输入框
import React from 'react'
import classnames from 'classnames'
// 定义返回的数据类型
import PropTypes from 'prop-types'
import PictureSelect from "./test" 

const pictures =[    {
  id: '1',
  name: 'foo',
  url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
},
{
  id: '2',
  name: 'foo',
  url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
},
{
  id: '3',
  name: 'foo',
  url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
}]

class TextDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  onChange=(value)=>{
    console.log('value',value);
    this.setState({value:value.length})
  }
  

  render() {
    const {value} = this.state;
    
    return (
      <div>
        <PictureSelect pictures={pictures} value={value} onChange={(value)=>this.onChange(value)}></PictureSelect>
      </div>
    );
  }
}


  TextDemo.propTypes = {

  };

  export default TextDemo;
