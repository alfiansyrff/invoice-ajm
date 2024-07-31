import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  flexColumn: {
    flexDirection: 'column',
  },
  grid: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 8,
    color: '#000',
  },
  textBold: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#000',
  },
  textLgBold: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  table: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    padding: 5,
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 8,
  },
  tableCellHeader: {
    padding: 5,
    flex: 1,
    fontWeight: 'bold',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 8,
    textAlign: 'center',
  },
  hr: {
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  rightAlignedText: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.flexRow}>
        <View style={styles.flexRow}>
          <Image src={'/logo.png'} style={{ width: 50, height: 50, marginRight: 10 }} />
          <View style={{fontSize: 6}}>
            <Text style={styles.textBold}>CV. ADITARA JAYA MAKMUR</Text>
            <Text style={styles.textBold}>READYMIX BUILDING MATERIAL & GENERAL SUPPLIER</Text>
            <Text style={[styles.text, {fontSize: 6}]}>Address: Dsn. Semen, Desa Tanggalrejo Kec. Mojoagung, Kab. Jombang</Text>
            <Text style={[styles.text, {fontSize: 6}]}>Telp: +62 82-33-6666-366</Text>
            <Text style={[styles.text, {fontSize: 6}]}>Email: aditarajayamakmur@gmail.com</Text>
          </View>
        </View>
        <Image src={'/header_kanan.png'} style={{ width: 200, height: 50 }} />
      </View>

      <View style={styles.hr} />

      <View style={[styles.grid, {marginTop:10}]}>
        <View style={styles.column}></View>
        <View style={styles.column}></View>
        <View style={styles.column}></View>
        <View style={[styles.column, styles.flexColumn, styles.textAlignLeft]}>
          <Text style={styles.textLgBold}>PURCHASE ORDER</Text>
          <Text style={styles.text}>Date:</Text>
          <Text style={styles.text}>No:</Text>
          <Text style={styles.text}>Delivery date:</Text>
          <Text style={styles.text}>Time:</Text>
        </View>
      </View>

      {/* <View style={styles.flexRow}>
        <View>
          <Text style={styles.textBold}>Kepada Yth:</Text>
          <Text style={styles.text}>PT. KOKOH INTI AREBANA TBK</Text>
        </View>
        <View></View>
        <View>
          <Text style={styles.textBold}>Deliver To</Text>
          <Text style={styles.text}>CV. Esa Abadi</Text>
          <Text style={styles.text}>Sungon, Suko</Text>
          <Text style={styles.text}>Sidoarjo</Text>
          <Text style={styles.text}>Jawa Timur</Text>
        </View>
      </View> */}
      <View style={styles.grid}>
        <View style={[styles.column, styles.flexColumn, styles.textAlignLeft]}>
          <Text style={styles.textBold}>Kepada Yth:</Text>
          <Text style={styles.text}>PT. KOKOH INTI AREBANA TBK</Text>
        </View>
        <View style={styles.column}></View>
        <View style={styles.column}></View>
        <View style={[styles.column, styles.flexColumn, styles.textAlignLeft]}>
          <Text style={styles.textBold}>Deliver To</Text>
          <Text style={styles.text}>CV. Esa Abadi</Text>
          <Text style={styles.text}>Sungon, Suko</Text>
          <Text style={styles.text}>Sidoarjo</Text>
          <Text style={styles.text}>Jawa Timur</Text>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableCellHeader}>No.</Text>
          <Text style={styles.tableCellHeader}>Description</Text>
          <Text style={styles.tableCellHeader}>Volume</Text>
          <Text style={styles.tableCellHeader}>Unit Price</Text>
          <Text style={styles.tableCellHeader}>Total Price</Text>
        </View>
        <View style={[styles.tableRow]}>
          <Text style={styles.tableCell}>1</Text>
          <Text style={styles.tableCell}>K-300 FA / 10±2</Text>
          <Text style={styles.tableCell}>22 m3</Text>
          <Text style={styles.tableCell}>Rp.705.000,00</Text>
          <Text style={styles.tableCell}>Rp.15.510.000,00</Text>
        </View>
      </View>

      <View style={[styles.grid, {marginBottom: 20}]}>
        <View style={styles.column}></View>
        <View style={styles.column}></View>

        <View style={[styles.column, styles.flexColumn, styles.textAlignLeft]}>

          <Text style={[styles.rightAlignedText, styles.textBold, {fontSize: 10}]}>Subtotal: Rp.15.510.000,00</Text>
          <Text style={[styles.rightAlignedText, styles.textBold, {fontSize: 10}]}>PPN 11%: Rp.1.706.100,00</Text>
          <Text style={[styles.rightAlignedText, styles.textBold, {fontSize: 10}]}>Total: Rp.17.216.100,00</Text>
        </View>
      </View>

      <View>
        <Text style={styles.textBold}>NB:-</Text>
      </View>
      
      <View style={styles.grid}>
        <View style={styles.column}></View>
        <View style={styles.column}></View>
        <View style={styles.column}></View>

        <View style={[styles.column, styles.flexColumn, {textAlign:'center'}]}>

            <Text style={[styles.textBold, {textAlign:'center'}]}>CV ADITARA JAYA MAKMUR</Text>
            <Text style={[styles.text, {textAlign: 'center', marginBottom: '20'}]}>APPROVED BY</Text>
            <Text style={styles.text}>(Signature)</Text>
            <Text style={styles.text}>Favirru Bagus mahardhika</Text>
  
        </View>
      </View>
   
    </Page>
  </Document>
);

export default MyDocument;
