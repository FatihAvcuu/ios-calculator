import React, { Component } from 'react'
import { Text, View, Dimensions, StatusBar, TouchableOpacity, ScrollView } from 'react-native'

const { width, height } = Dimensions.get('window');

export default class App extends Component {
  state = {
    number: '0',
    first_number: '',
    operation: '',
    zero: false
  }

  changeNumber = (num) => {
    if (this.state.number == 'NaN' || this.state.number == 'Infinity') {
      this.setState({
        number: num
      })
    }
    else if (this.state.zero == true) {
      this.setState({
        number: `${this.state.number}${num}`
      })
    }
    else if (num == '.') {
      this.setState({
        number: `${this.state.number}${num}`,
        zero: true
      })
    }
    else if (num == '0') { }
    else {
      this.setState({
        number: num,
        zero: true
      })
    }
  }

  changeNegative = () => {
    let number = parseFloat(this.state.number) * -1;
    this.setState({
      number: number.toString()
    })
  }

  setZero = () => {
    this.setState({
      number: '0',
      first_number: '',
      zero: false
    })
  }

  //işlemler sum=toplama minus=çıkartma dump=çarpma division=bölme percent=yüzde
  calc = (operation) => {
    this.setState({
      first_number: this.state.number,
      number: '0',
      zero: false,
      operation: operation
    })
  }


  //sonucu göster
  equals = () => {
    switch (this.state.operation) {
      case 'sum':
        this.setState({
          number: parseFloat(this.state.first_number) + parseFloat(this.state.number),
          first_number: '',
          zero: false,
          operation: ''
        })
        break;
      case 'minus':
        this.setState({
          number: parseFloat(this.state.first_number) - parseFloat(this.state.number),
          first_number: '',
          zero: false,
          operation: ''
        })
        break;
      case 'dump':
        this.setState({
          number: parseFloat(this.state.first_number) * parseFloat(this.state.number),
          first_number: '',
          zero: false,
          operation: ''
        })
        break;
      case 'division':
        this.setState({
          number: parseFloat(this.state.first_number) / parseFloat(this.state.number),
          first_number: '',
          zero: false,
          operation: ''
        })
        break;
      case 'percent':
        this.setState({
          number: parseFloat(this.state.first_number) * (parseFloat(this.state.number) / 100),
          first_number: '',
          zero: false,
          operation: ''
        })
      default:
        break;
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#000', paddingTop: 40 }}>
        <StatusBar backgroundColor="black" barStyle='light-content' />
        <ScrollView style={{ scaleX: -1 }} horizontal={true}>
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', paddingHorizontal: 20, paddingBottom: 20, scaleX:-1 }}>
            <Text style={{ fontSize: 30, color: 'lightgray', fontFamily: 'sans-serif-thin' }}>{this.state.first_number}</Text>
          </View>
        </ScrollView>
        <ScrollView style={{ scaleX: -1 }} horizontal={true}>
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', paddingHorizontal: 20, scaleX: -1 }}>
            <Text style={{ fontSize: 80, color: 'white', fontFamily: 'sans-serif-thin' }}>{this.state.number}</Text>
          </View>
        </ScrollView>
        <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 5 }}>
          <TouchableOpacity onPress={() => this.setZero()}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#a5a5a5', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 28 }}>AC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeNegative()}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#a5a5a5', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30 }}>+/-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.calc('percent')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#a5a5a5', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30 }}>%</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.calc('division')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#fe9e0a', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>÷</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 5 }}>
          <TouchableOpacity onPress={() => this.changeNumber('7')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#333', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeNumber('8')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#333', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeNumber('9')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#333', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>9</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.calc('dump')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#fe9e0a', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>x</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 5 }}>
          <TouchableOpacity onPress={() => this.changeNumber('4')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#333', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeNumber('5')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#333', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeNumber('6')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#333', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>6</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.calc('minus')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#fe9e0a', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>-</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 5 }}>
          <TouchableOpacity onPress={() => this.changeNumber('1')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#333', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeNumber('2')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#333', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeNumber('3')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#333', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.calc('sum')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#fe9e0a', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>+</Text>
            </View>
          </TouchableOpacity>
        </View >

        <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 5, marginBottom: 35 }}>
          <TouchableOpacity onPress={() => this.changeNumber('0')}>
            <View style={{ width: [width / 4] * 2 - 20, height: [width / 4] - 20, backgroundColor: '#333', borderRadius: (width / 4) - 20, justifyContent: 'center' }}>
              <View style={{ width: [width / 4] - 20, height: width, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, color: 'white' }}>0</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeNumber('.')}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#333', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.equals()}>
            <View style={{ width: [width / 4] - 20, height: [width / 4] - 20, backgroundColor: '#fe9e0a', borderRadius: (width / 4) - 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white' }}>=</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
