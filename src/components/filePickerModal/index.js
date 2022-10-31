import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
const FilePickerModal = ({modalVisible=false, onClose, onImageSelect}) => {
  const picker =() =>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      onImageSelect(image.path)
      onClose()
    });
  }
 
  return (
    <Modal
      visible={modalVisible}
      style={styles.modalStyles}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
    >
  
      <View style={styles.mainView}>
           <View style={styles.modaltextconatiner}>
          <Text style={styles.modaltext}>Please select an Image</Text>
          </View>
          <View style={styles.modalbtncontainer}>
            <TouchableOpacity activeOpacity={0.9} style={styles.modalbtn}>
              <Text style={styles.modalbtntext}>From Camera</Text>
             </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={() =>picker()} style={styles.modalbtn}>
              <Text style={styles.modalbtntext}>From  Gallery</Text>
             </TouchableOpacity>
          </View>
       </View>
    </Modal>
  )
}

export default FilePickerModal