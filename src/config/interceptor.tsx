import { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { useEffect } from 'react';
import { EnhancedStore } from '@reduxjs/toolkit';
import Config from 'react-native-config';
import { ReduxStore } from './../redux/store';
import { Alert } from 'react-native';
import { strings } from '../constants/strings';

export const useInterceptor = (_: EnhancedStore<ReduxStore>) => {
  // const store = _.getState();

  function handleRequestSuccess(
    request: InternalAxiosRequestConfig,
  ): InternalAxiosRequestConfig {
    const { headers } = request;
    if (headers) {
      headers['Content-Type'] = 'application/json';
      headers.accept = 'application/json';
    }
    return request;
  }

  function handleRequestError(error: unknown) {
    console.warn(`REQUEST ERROR! => ${error}`);
    return error;
  }

  function handleResponseSuccess(response: AxiosResponse): AxiosResponse {
    response.config.timeout = 3000;
    return response;
  }

  const handleResponseError = (error: any) => {
    Alert.alert(strings.labels.error, strings.labels.anErrorHasOccurred);
    throw error;
  };

  useEffect(() => {
    axios.defaults.baseURL = `${Config.DH_API}/api/v1`;
    axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
  }, []);
};
