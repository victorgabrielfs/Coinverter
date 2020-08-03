import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Modal } from 'react-native'
import styles from './styles'

const Home = () => {

  const [resultModalVisible, setResultModalVisible] = useState(false)
  const [queryModalVisible, setQueryModalVisible] = useState(false)
  const [query, setQuery] = useState(0)

  return (
    <>
      <View style={styles.main}>
        {/* CONVERSION RESULT */}
        <View>
          <Text style={styles.resultText}>{query}</Text>
        </View>

        {/* RESULT CURRENCY BUTTON */}
        <View>
          <TouchableOpacity
            style={styles.resultButton}
            onPress={() => setResultModalVisible(true)}
          >
            <Text style={styles.resultButtonText}>$</Text>
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
                val ? setQuery(val) : setQuery(0)
              }} />
          </View>

          {/* QUERY CURRENCY BUTTON */}
          <View>
            <TouchableOpacity
              style={styles.queryButton}
              onPress={() => setQueryModalVisible(true)}
            >
              <Text style={styles.queryButtonText}>$</Text>
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
          </Modal>



        </View>
      </View>
    </>
  )
}

export default Home