import { Checkbox ,Row ,Col } from 'antd';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

var picturesData = [
    {
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
    },
  ];

class App extends React.Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
    pictures:[],
    value:'',
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  onChangeSelect =(item)=>{
      console.log("onChangeSelect",item);
      this.props.onChange(item);
  }

  render() {
    let {pictures,value } =this.props;
    
    const { onChange} =this.props;

    pictures=pictures||picturesData;
    
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <Checkbox.Group style={{ width: '100%' }} onChange={(value)=>this.onChange(value)}>
        <Row>
        {
          pictures.map((item,index)=>{
            return (
                <Col span={8} key={index} >  
                 <Checkbox value={item.id} 
                 style={{
                    position:'absolute',
                    top:'10px',
                    left:'10px',
                 }}></Checkbox>
                <img src={item.url} />                
                </Col>
            )
          })
        }
    </Row>
  </Checkbox.Group>
      </div>
    );
  }
}

App.propTypes = {
    pictures: PropTypes.array,
    value:PropTypes.string,
    onChange:PropTypes.func,
  };

export default App;



