/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import * as React from 'react';
import SafeAreaView from '../../Components/SafeAreaView/SafeAreaView';
import StyleSheet from '../../StyleSheet/StyleSheet';
import Text from '../../Text/Text';
import View from '../../Components/View/View';
import LogBoxButton from './LogBoxButton';
import * as LogBoxStyle from './LogBoxStyle';

type Props = $ReadOnly<{|
  onDismiss: () => void,
  onMinimize: () => void,
|}>;

function LogBoxInspectorFooter(props: Props): React.Node {
  return (
    <View style={styles.root}>
      <FooterButton text="Minimize" onPress={props.onMinimize} />
      <FooterButton text="Dismiss" onPress={props.onDismiss} />
    </View>
  );
}

type ButtonProps = $ReadOnly<{|
  onPress: () => void,
  text: string,
|}>;

function FooterButton(props: ButtonProps): React.Node {
  return (
    <LogBoxButton
      backgroundColor={{
        default: 'transparent',
        pressed: LogBoxStyle.getBackgroundLightColor(),
      }}
      onPress={props.onPress}
      style={buttonStyles.button}>
      <View style={buttonStyles.content}>
        <Text style={buttonStyles.label}>{props.text}</Text>
      </View>
      <SafeAreaView />
    </LogBoxButton>
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
  },
  label: {
    color: LogBoxStyle.getTextColor(1),
    fontSize: 14,
    includeFontPadding: false,
    lineHeight: 18,
  },
});

const styles = StyleSheet.create({
  root: {
    backgroundColor: LogBoxStyle.getBackgroundColor(1),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowRadius: 2,
    shadowOpacity: 0.5,
    elevation: 1,
    flexDirection: 'row',
  },
});

export default LogBoxInspectorFooter;
