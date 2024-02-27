import React, { useRef, useEffect } from "react";
import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";

const Index = () => {
  const videoRef = useRef(null);

  const startVideo = () => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.error("error accessing the camera", err);
        });
    } else {
      alert("Sorry, your browser does not support HTML5 video.");
    }
  };

  useEffect(() => {
    startVideo();
  }, []);

  return (
    <VStack spacing={4} p={5}>
      <Heading as="h1" size="xl">
        Real-time Camera Feed
      </Heading>
      <Text>This interface displays the real-time feed from your webcam. It does not analyze or convert the feed into shapes or formulas.</Text>
      <Box boxShadow="lg" p="6" rounded="md" bg="white">
        <video ref={videoRef} width="640" height="480" autoPlay muted></video>
      </Box>
      <Flex justify="center">
        <Button leftIcon={<FaCamera />} colorScheme="teal" onClick={startVideo}>
          Start Camera
        </Button>
      </Flex>
    </VStack>
  );
};

export default Index;
