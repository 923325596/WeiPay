import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView, StyleSheet, TextInput, Image, AsyncStorage, Dimensions } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Terms } from './terms';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Input } from '../../Components/common/Input';
import { newWalletCreation, newWalletNameEntry } from '../../Actions/actionCreator';
const ethers = require('ethers');

import provider from '../../constants/Providers';

class CreateWalletName extends Component {

    static navigationOptions = {
        title: "Create Wallet Name"
    };

    navigate = () => {
        const navigateToPassphrase = NavigationActions.navigate({ routeName: "recoverWallet" });
        this.props.navigation.dispatch(navigateToPassphrase);
    };

    getWalletName(name) {
        this.props.newWalletNameEntry(name);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.contentContainer} >
                    <View style={styles.form} >
                        <FormLabel>Enter wallet name </FormLabel>
                        <FormInput placeholder={"Family wallet, Work Fund.."}
                            onChangeText={this.getWalletName.bind(this)}
                        />
                        <View style={styles.btnContainer} >
                            <Button
                                disabled={this.props.walletName === ""}
                                title='Next'
                                icon={{ size: 28 }}
                                buttonStyle={{
                                    backgroundColor: 'blue', borderRadius: 10, width: 225, height: 40, alignItems: 'center',
                                    justifyContent: 'center', marginBottom: 30, marginTop: 5.5
                                }}
                                textStyle={{ textAlign: 'center' }}
                                onPress={this.navigate}
                            />
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, alignItems: 'center', justifyContent: 'flex-start'
    },
    contentContainer: {
        marginTop: 25
    },
    form: {
        width: Dimensions.get('window').width - 10,
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 25
    },
})

const mapStateToProps = ({ newWallet }) => {
    const { walletName } = newWallet;
    return { walletName }
}

export default connect(mapStateToProps, { newWalletNameEntry, newWalletCreation })(CreateWalletName);

