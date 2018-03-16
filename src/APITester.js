import React from 'react';
import axios from 'axios';
import { List } from 'antd';

// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://wi5nktwx70.execute-api.us-east-2.amazonaws.com/dev';

class APITester extends React.Component {
  state = {
    data: null
  };
  componentDidMount() {
    // .then(res => {
    //   this.setState({ data: res.data });
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    this._getData()
      .then(data => {
        this.setState({ data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  _getData = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios({
          url: `${BASE_URL}/users`,
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        });
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    });
  };
  _add = async () => {
    if (this.input.value) {
      try {
        const res = await axios.post(`${BASE_URL}/users`, {
          name: this.input.value
        });
        if (res) {
          this.input.value = '';
          const data = await this._getData();
          this.setState({ data });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  _remove = async userId => {
    try {
      const res = await axios.delete(`${BASE_URL}/users/${userId}`);
      if (res) {
        const data = await this._getData();
        this.setState({ data });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        {data && (
          <List
            size="small"
            bordered
            dataSource={data.Items}
            renderItem={item => (
              <List.Item>
                {item.name}&nbsp;&nbsp;<button
                  onClick={this._remove.bind(this, item.userId)}
                >
                  X
                </button>
              </List.Item>
            )}
          />
        )}
        <br />
        <input type="text" ref={input => (this.input = input)} />
        &nbsp;&nbsp;<button onClick={this._add}>Add</button>
      </div>
    );
  }
}

export default APITester;
