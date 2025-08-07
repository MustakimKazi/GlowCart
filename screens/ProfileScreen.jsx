import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Profile</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/12.jpg' }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Olivia</Text>
          <Text style={styles.email}>Oliva@gmail.com</Text>
        </View>
        <TouchableOpacity style={styles.editIcon}>
          <Icon name="create-outline" size={20} color="#DB4E56" />
        </TouchableOpacity>
      </View>

      {/* Menu Sections */}
      <View style={styles.menuCard}>
        <MenuItem icon="location-outline" title="Address" subtitle="Manage your saved address" />
        <MenuItem icon="receipt-outline" title="Order History" subtitle="View your past orders" />
        <MenuItem icon="language-outline" title="Language" />
        <MenuItem icon="notifications-outline" title="Notifications" />
      </View>

      <View style={styles.menuCard}>
        <MenuItem icon="call-outline" title="Contact Us" />
        <MenuItem icon="help-circle-outline" title="Get Help" />
        <MenuItem icon="lock-closed-outline" title="Privacy Policy" />
        <MenuItem icon="document-text-outline" title="Terms and Conditions" />
      </View>

      {/* Logout */}
      <View style={styles.menuCard}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Icon name="log-out-outline" size={22} color="#DB4E56" />
            <Text style={styles.logoutText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function MenuItem({ icon, title, subtitle }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuLeft}>
        <Icon name={icon} size={22} color="#555" />
        <View>
          <Text style={styles.menuTitle}>{title}</Text>
          {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      <Icon name="chevron-forward" size={18} color="#999" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEEAE6',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    color:"#d0454cff",
    fontSize: 30,

    fontFamily: 'Italiana-Regular',
  },
  profileCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    position: 'relative',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    color:"#DB4E56",
    fontWeight: 'bold',
  },
  email: {
    fontSize: 13,
    color: '#666',
  },
  editIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
    padding: 4,
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuTitle: {
    color:"black",
    fontSize: 15,
    fontWeight: '500',
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#DB4E56',
    marginLeft: 16,
  },
});
