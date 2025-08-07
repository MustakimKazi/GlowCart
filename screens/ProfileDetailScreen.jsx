import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function ProductDetailScreen() {
  const product = useSelector((state) => state.product.selectedProduct);
  const [cartCount, setCartCount] = useState(0);
  const navigation = useNavigation();


  const reviews = [
    {
      id: 1,
      name: 'Eleanor Collins',
      email: 'eleanor.collins@gmail.com',
      comment: 'Would not recommend...',
      rating: 4,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 2,
      name: 'Lucas Gordon',
      email: 'lucas.gordon@gmail.com',
      comment: 'Very satisfied!',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  ];

  if (!product) return <Text>No Product Selected</Text>;

  return (
    <ScrollView style={styles.container}>
      {/* Header Icons */}
      <View style={styles.headerIcons}>
       <TouchableOpacity onPress={() => navigation.navigate('Main')}
>
  <Icon name="arrow-back-outline" size={24} color="#333" />
</TouchableOpacity>


        <View style={styles.iconGroup}>
          <TouchableOpacity style={styles.iconWrapper}>
            <Icon name="share-social-outline" size={22} color="#DB4E56" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconWrapper}>
            <Icon name="cart-outline" size={24} color="#DB4E56" />
            {cartCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Product Image */}
      <Image source={{ uri: product.thumbnail }} style={styles.productImage} />

      <View style={styles.content}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>

        <View style={styles.ratingRow}>
          <Text style={styles.stars}>★★★☆☆</Text>
          <Text style={styles.ratingText}>2.56/5</Text>
        </View>

        <Text style={styles.soldBy}>
          Sold by : <Text style={styles.sellerName}>Essence</Text>
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.currentPrice}>${product.price}</Text>
          <Text style={styles.oldPrice}>$10.48</Text>
        </View>

        <TouchableOpacity
          style={styles.addToBagBtn}
          onPress={() => setCartCount(cartCount + 1)}
        >
          <Text style={styles.addToBagText}>Add to Bag</Text>
        </TouchableOpacity>

        <View style={styles.highlights}>
          <Text style={styles.highlightsTitle}>Highlights</Text>

          <View style={styles.highlightRow}>
            <View style={styles.highlightCol}>
              <Text style={styles.highlightLabel}>Width</Text>
              <Text style={styles.highlightValue}>15.14</Text>
            </View>
            <View style={styles.verticalLine} />
            <View style={styles.highlightCol}>
              <Text style={styles.highlightLabel}>Height</Text>
              <Text style={styles.highlightValue}>13.08</Text>
            </View>
          </View>

          <View style={styles.highlightRow}>
            <View style={styles.highlightCol}>
              <Text style={styles.highlightLabel}>Warranty</Text>
              <Text style={styles.highlightValue}>1 week</Text>
            </View>
            <View style={styles.verticalLine} />
            <View style={styles.highlightCol}>
              <Text style={styles.highlightLabel}>Shipping</Text>
              <Text style={styles.highlightValue}>In 3-5 business days</Text>
            </View>
          </View>
        </View>

        <Text style={styles.reviewsTitle}>Ratings & Reviews</Text>
        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Image source={{ uri: review.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.reviewerName}>{review.name}</Text>
                <Text style={styles.reviewerEmail}>{review.email}</Text>
              </View>
            </View>
            <Text style={styles.reviewComment}>{review.comment}</Text>
            <Text style={styles.reviewStars}>
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FEEAE6' },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginLeft: 16,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: '#DB4E56',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  productImage: {
    width: '80%',
    height: 300,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  content: { padding: 20 },
  productTitle: {
    fontSize: 21,
    fontWeight: '800',
    marginVertical: 4,
    color: '#DB4E56',
  },
  productDescription: { fontSize: 14, color: '#444', marginBottom: 8 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  stars: { fontSize: 16, color: '#DB4E56', fontWeight: 'bold' },
  ratingText: { marginLeft: 8, fontSize: 14, color: '#333' },
  soldBy: { fontSize: 13, color: '#444', marginVertical: 6 },
  sellerName: { fontWeight: 'bold' },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  currentPrice: { fontSize: 24, fontWeight: 'bold', color: '#DB4E56' },
  oldPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#AAA',
    marginLeft: 10,
  },
  addToBagBtn: {
    backgroundColor: '#DB4E56',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 12,
  },
  addToBagText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  highlights: { marginVertical: 16 },
  highlightsTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color:'#DB4E56', },
 
  highlightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
  },
  highlightCol: { width: '45%' ,color:'#DB4E56'},
  highlightLabel: { fontSize: 14, color: '#444' },
  highlightValue: { fontWeight: 'bold', marginTop: 2 ,color:'#DB4E56'},
  verticalLine: {
    width: 1,
    height: '80%',
    backgroundColor: '#DDD',
    marginHorizontal: 8,
  },
  reviewsTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 12, color:'#DB4E56', },
  reviewCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    borderColor: '#EEE',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  reviewerName: { fontSize: 16, fontWeight: 'bold' },
  reviewerEmail: { fontSize: 12, color: '#666' },
  reviewComment: { fontSize: 14, color: '#333', marginBottom: 6 },
  reviewStars: { fontSize: 16, color: '#DB4E56' },
});
