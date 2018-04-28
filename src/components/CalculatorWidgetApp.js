import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {withStyles} from 'material-ui/styles';
// import AnswerKey from './AnswerKey';
// import ButtonCollection from './ButtonCollection';

const styles = theme => ({
  rootApp: {
    width: "340px",
    height: "450px",
    background: 'blue',
    flex: 1,
    borderRadius: "2%",
    flexDirection: 'row',
  },
  calcultorWidget: {
    width: "96%",
    margin: "2%",
    height: "375px",
  },
  titleContainer: {
    flexDirection: 'column-reverse',
    fontSize: "30",
    height: "60px",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}
);

@withStyles(styles) @inject('RootStore') @observer
export default class App extends Component {

    //this is global catch to catch an error anywhere in the app
    componentDidCatch(error, info) {
        console.log(`There was an error: ${error}`);
        console.log(`Error info: ${info}`);
        //TODO: Render a page that something broke the app...
    }

    render() {
        const {classes, RootStore} = this.props;
        return (
            <div className={classes.rootApp}>
                <div className={classes.titleContainer}>
                    Calculator
                </div>
                {/*<AnswerKey/>*/}
                {/*<ButtonCollection/>*/}
            </div>

        );
    }
}

