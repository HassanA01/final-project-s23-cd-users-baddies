import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Image,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text,
  Select,
  Grid,
  GridItem,} from '@chakra-ui/react';

const firebaseConfig = {
  apiKey: 'CHANGE_WITH_PEROSNAL',
  authDomain: 'CHANGE_WITH_PEROSNAL',
  projectId: 'CHANGE_WITH_PEROSNAL',
  storageBucket: 'CHANGE_WITH_PEROSNAL',
  messagingSenderId: 'CHANGE_WITH_PEROSNAL',
  appId: 'CHANGE_WITH_PEROSNAL',
  measurementId: 'CHANGE_WITH_PEROSNAL',
};

const app = initializeApp(firebaseConfig);