import { Checkbox ,Row ,Col } from 'antd';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];



class App extends React.Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };
  
 onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });

    console.log("onChange",pictures);
    onChange(e.target.checked);
  };
  
  render() {

    const {pictures,value } =this.props;
    const { onChange} =this.props;

    const{indeterminate,checkAll}=this.state;



    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={indeterminate}
            // onChange={this.onCheckAllChange}
            onChange={this.onCheckAllChange}
            checked={checkAll}
          >
            已选中{value}个文件
          </Checkbox>
        </div>
        <br />
        <Checkbox.Group style={{ width: '100%' }} onChange={(value)=>onChange(value)}>
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
    pictures: PropTypes.array.isRequired,
    value:PropTypes.number.isRequired,
    onChange:PropTypes.func.isRequired,
  };

export default App;



