// OffersScreen.jsx
// Updated OffersScreen.jsx using Redux
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  searchProducts,
  applyPriceFilter,
  clearFilter,
} from '../src/redux/productSlice'; // adjust path


import { useNavigation } from '@react-navigation/native';

import { setSelectedProduct } from '../src/redux/productSlice'; // adjust path


export default function HomeScreen() {
  const dispatch = useDispatch();
  const { filtered, loading } = useSelector((state) => state.product);
  const [searchText, setSearchText] = useState('');
  const [filterApplied, setFilterApplied] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    dispatch(searchProducts(text));
  };

  const handleFilter = () => {
    if (filterApplied) {
      dispatch(clearFilter());
      setFilterApplied(false);
    } else {
      dispatch(applyPriceFilter());
      setFilterApplied(true);
    }
  };

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => {
      dispatch(setSelectedProduct(item)); // set selected product in Redux
      navigation.navigate('ProductDetailScreen'); // navigate to the details screen
    }}
  >
    <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
    <Text style={styles.productName}>{item.title}</Text>
    <Text style={styles.productPrice}>${item.price}</Text>
    <Ionicons
      name="heart-outline"
      size={24}
      color="#999"
      style={styles.heartIcon}
    />
  </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Viorra</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="#333" style={styles.icon} />
          <Ionicons name="cart-outline" size={24} color="#333" style={styles.icon} />
        </View>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#999" style={{ marginHorizontal: 8 }} />
        <TextInput
          placeholder="Search for all products"
          placeholderTextColor="#999"
          style={{ flex: 1, fontSize: 16,color: '#333' }}
          value={searchText}
          onChangeText={(text) => handleSearch(text)}
        />
      </View>

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Best Products</Text>
          <Text style={styles.sectionSubtitle}>{filtered.length} products</Text>
        </View>
        <TouchableOpacity style={styles.filterBtn} onPress={handleFilter}>
          <Text style={styles.filterText}>{filterApplied ? 'Clear Filter' : 'Apply Filter'}</Text>
          <Ionicons name="chevron-down-outline" size={16} color="#333" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#C25559" style={{ marginTop: 30 }} />
      ) : (
        <FlatList
          data={filtered}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.productsGrid}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 10,
  },

  logo: {
    fontSize: 28,
    fontFamily: 'serif',
    color: '#C25559',
  
    fontFamily: 'Italiana-Regular',
  },

  headerIcons: {
    flexDirection: 'row',
  },

  icon: {
    marginLeft: 16,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    marginHorizontal: 16,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f5c2c0',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFF1F0',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f5c2c0',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  sectionSubtitle: {
    fontSize: 14,
    color: '#999',
  },

  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  filterText: {
    marginRight: 4,
    color: '#333',
    fontSize: 14,
  },

  productsGrid: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },

  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 6,
    padding: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    alignItems: 'center',
    elevation: 2,
  },

  productImage: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    marginBottom: 10,
  },

  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },

  productPrice: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },

  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
