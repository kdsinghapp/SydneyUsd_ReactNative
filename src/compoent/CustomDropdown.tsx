import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  Modal,
} from "react-native";
import { color } from "../constant";
import font from "../theme/font";
import imageIndex from "../assets/imageIndex";

interface DropdownItem {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  data: DropdownItem[];
  placeholder?: string;
  onSelect: (value: string) => void;
  leftIcon?: React.ReactNode;
  search?: boolean;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  data,
  placeholder = "Select",
  onSelect,
  leftIcon,
  search = false,
}) => {
  const [value, setValue] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filteredData = data.filter((item) =>
    item.label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={[styles.dropdown]}
        onPress={() => setVisible(true)}
      >
        <View style={{
          flexDirection:"row",
          alignItems:"center"
        }}>
          {leftIcon &&
                  <Image source={imageIndex.userLogo} 
                  style={{
                    height:22,
                    width:22,
                    resizeMode:"contain"
                  }}
                  />
                  }

        <Text
          style={[
            styles.selectedText,
            !value && {  marginLeft:11,color: "#ADA4A5", fontFamily: font.MonolithRegular },
          ]}
        >
          {value
            ? data.find((item) => item.value === value)?.label
            : placeholder}
        </Text>
        </View>
        <Image source={imageIndex.arrowqdown} 
        
        style={{
          height:22,
          width:22,
          tintColor:"black"
        }}
        />
      </TouchableOpacity>

      {/* Modal for dropdown list */}
      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setVisible(false)}
        >
          <View style={styles.dropdownContainer}>
            {search && (
              <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                placeholderTextColor="#999"
                value={searchText}
                onChangeText={setSearchText}
              />
            )}

            <FlatList
              data={filteredData}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    setValue(item.value);
                    onSelect(item.value);
                    setVisible(false);
                    setSearchText("");
                  }}
                >
                  <Text style={styles.itemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <Text style={styles.noDataText}>No results found</Text>
              }
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 15,
    marginBottom:15
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: '#F7F8F8',
    paddingHorizontal: 15,
    height: 65,
    marginTop: 15,
     borderColor:"#708090",
 width:"100%" ,
 justifyContent:"space-between"
  },
  iconWrapper: {
    position: "absolute",
    left: 15,
  },
  selectedText: {
    fontSize: 16,
    color: "#000",
    fontFamily: font.MonolithRegular,
    marginLeft:11
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 20,
  },
  dropdownContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    maxHeight: "60%",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
    fontFamily: font.MonolithRegular,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },
  itemText: {
    fontSize: 16,
    color: "#000",
    fontFamily: font.MonolithRegular,
  },
  noDataText: {
    textAlign: "center",
    color: "#999",
    paddingVertical: 15,
    fontFamily: font.MonolithRegular,
  },
});

export default CustomDropdown;
