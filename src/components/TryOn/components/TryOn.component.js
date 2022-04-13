import React, { useState, useEffect } from "react";
import { cameraWithTensors } from "@tensorflow/tfjs-react-native";
import { Camera } from "expo-camera";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
//import * as tf from "@tensorflow/tfjs"

const TensorCamera = cameraWithTensors(Camera);

export function TryOn(props) {
  const [hasPermission, setHasPermission] = useState(true);
  const [model, setModel] = useState(); //useState <cocoSsd.ObjectDetection>();
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  if (hasPermission === null) {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // Currently expo does not support automatically determining the
  // resolution of the camera texture used. So it must be determined
  // empirically for the supported devices and preview size.
  let textureDims;
  if (Platform.OS === "ios") {
    textureDims = {
      height: 1920,
      width: 1080,
    };
  } else {
    textureDims = {
      height: 1200,
      width: 1600,
    };
  }

  const handleCameraStream = () => {
    const loop = async () => {
      const nextImageTensor = images.next().value;

      //
      // do something with tensor here
      //

      // if autorender is false you need the following two lines.
      // updatePreview();
      // gl.endFrameEXP();

      requestAnimation(loop);
    };
    loop();
  };

  return (
    <View>
      <TensorCamera
        // Standard Camera props
        style={styles.camera}
        type={Camera.Constants.Type.front}
        // Tensor related props
        // cameraTextureHeight={textureDims.height}
        // cameraTextureWidth={textureDims.width}
        // resizeHeight={320}
        // resizeWidth={240}
        // resizeDepth={3}
        // onReady={handleCameraStream()}
        // autorender={true}
        // useCustomShadersToResize={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  camera: {},
});
