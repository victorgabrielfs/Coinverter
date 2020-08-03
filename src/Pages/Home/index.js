import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Modal, FlatList } from 'react-native'
import styles from './styles'
import axios from 'axios'
import fx from 'money'
import currenciesList from './util/currenciesList'


const Home = () => {

  useEffect(() => {
    axios.get('https://api.exchangeratesapi.io/latest').then((response) => {
      const res = response.data
      setResponseData(res.rates)
      fx.rates = responseData
      fx.base = "EUR"


      if (typeof fx !== "undefined" && fx.rates) {
        fx.rates = responseData
        fx.base = "EUR"
      } else {
        // If not, apply to fxSetup global:
        var fxSetup = {
          rates: responseData,
          base: "EUR"
        }
      }
    })
  }, [])

  const [result, setResult] = useState(0)
  const [resultCurrency, setResultCurrency] = useState('$')
  const [queryCurrency, setQueryCurrency] = useState('$')
  const [responseData, setResponseData] = useState({})
  const [resultModalVisible, setResultModalVisible] = useState(false)
  const [queryModalVisible, setQueryModalVisible] = useState(false)
  const [query, setQuery] = useState(0)

  console.log(fx.rates)

  return (
    <>
      <View style={styles.main}>
        {/* CONVERSION RESULT */}
        <View>
          <Text style={styles.resultText}>{result}</Text>
        </View>

        {/* RESULT CURRENCY BUTTON */}
        <View>
          <TouchableOpacity
            style={styles.resultButton}
            onPress={() => setResultModalVisible(true)}
          >
            <Text style={styles.resultButtonText}>{resultCurrency}</Text>
          </TouchableOpacity>
        </View>

        {/* QUERY INPUT/BUTTON */}
        <View style={styles.queryInputButton}>
          {/* QUERY INPUT */}
          <View>
            <TextInput
              style={styles.queryInput}
              keyboardType="decimal-pad"
              onChangeText={(val) => {
                if (val && (queryCurrency != "$" && resultCurrency != "$")) {
                  fx.rates = responseData
                  fx.base = "EUR"
                  setResult(fx(val).from(queryCurrency).to(resultCurrency))
                } else {
                  setResult(0)
                }

              }} />
          </View>

          {/* QUERY CURRENCY BUTTON */}
          <View>
            <TouchableOpacity
              style={styles.queryButton}
              onPress={() => setQueryModalVisible(true)}
            >
              <Text style={styles.queryButtonText}>{queryCurrency}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* RESULT CURRENCY MODAL */}
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={resultModalVisible}
          >



            {/* RESULT MODAL HEADER */}
            <View style={styles.headerModal}>
              <TouchableOpacity
                style={styles.headerModalButton}
                onPress={() => setResultModalVisible(false)}>
                <Text style={styles.headerModalButtonText}>{'<'}</Text>
              </TouchableOpacity>
              <Text style={styles.headerModalText}>
                Select your result currency
              </Text>
            </View>

            {/* RESULT CURRENCIES LIST */}
            <FlatList
              data={currenciesList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalListItem}
                  onPress={() => {
                    setResultCurrency(item.currency)
                    setResultModalVisible(false)
                  }}>
                  <Text style={styles.modalListItemText}>{item.currency}</Text>
                </TouchableOpacity>
              )}
            />

          </Modal>
        </View>

        {/* QUERY CURRENCY MODAL  */}
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={queryModalVisible}
          >
            {/* QUERY MODAL HEADER */}
            <View style={styles.headerModal}>
              <TouchableOpacity
                style={styles.headerModalButton}
                onPress={() => setQueryModalVisible(false)}>
                <Text style={styles.headerModalButtonText}>{'<'}</Text>
              </TouchableOpacity>
              <Text style={styles.headerModalText}>
                Select your query currency
              </Text>
            </View>


            {/* QUERY CURRENCIES LIST */}
            <FlatList
              data={currenciesList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalListItem}
                  onPress={() => {
                    setQueryCurrency(item.currency)
                    setQueryModalVisible(false)
                  }}>
                  <Text style={styles.modalListItemText}>{item.currency}</Text>
                </TouchableOpacity>
              )}
            />
          </Modal>



        </View>


      </View>
    </>
  )
}

export default Home