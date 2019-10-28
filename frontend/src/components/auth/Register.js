import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import StepZilla from 'react-stepzilla';
import { Line } from 'rc-progress';
import Select from "react-select";
import { connect } from "react-redux";
import { signup } from '../../actions/auth'
import Tooltip from 'rc-tooltip';
import Header from './Header'

class RegisterStepOne extends Component {

  constructor(props) {
    super(props);
  }

  isValidated() {
    this.props.validateField('first_name', this.props.newUser.first_name);
    this.props.validateField('last_name', this.props.newUser.last_name);
    this.props.validateDate(this.props.newUser.date);
    this.props.validateMonth(this.props.newUser.month);
    this.props.validateYear(this.props.newUser.year);  
    return this.props.validation.first_name && this.props.validation.last_name && this.props.validation.date && this.props.validation.month && this.props.validation.year;
  }
  
  render() {
    let dates = [
      { value: '01', label: '01' },
      { value: '02', label: '02' },
      { value: '03', label: '03' },
      { value: '04', label: '04' },
      { value: '05', label: '05' },
      { value: '06', label: '06' },
      { value: '07', label: '07' },
      { value: '08', label: '08' },
      { value: '09', label: '09' },
      { value: '10', label: '10' },
      { value: '11', label: '11' },
      { value: '12', label: '12' },
      { value: '13', label: '13' },
      { value: '14', label: '14' },
      { value: '15', label: '15' },
      { value: '16', label: '16' },
      { value: '17', label: '17' },
      { value: '18', label: '18' },
      { value: '19', label: '19' },
      { value: '20', label: '20' },
      { value: '21', label: '21' },
      { value: '22', label: '22' },
      { value: '23', label: '23' },
      { value: '24', label: '24' },
      { value: '25', label: '25' },
      { value: '26', label: '26' },
      { value: '27', label: '27' },
      { value: '28', label: '28' },
      { value: '29', label: '29' },
      { value: '30', label: '30' },
      { value: '31', label: '31' },
    ];
    
    let months = [
      { value: '01', label: 'January' },
      { value: '02', label: 'February' },
      { value: '03', label: 'March' },
      { value: '04', label: 'April' },
      { value: '05', label: 'May' },
      { value: '06', label: 'June' },
      { value: '07', label: 'July' },
      { value: '08', label: 'August' },
      { value: '09', label: 'September' },
      { value: '10', label: 'October' },
      { value: '11', label: 'November' },
      { value: '12', label: 'December' }
    ]

    let years = [
      { value: '1990', label: '1990' },
      { value: '1991', label: '1991' },
      { value: '1992', label: '1992' },
      { value: '1993', label: '1993' },
      { value: '1994', label: '1994' },
      { value: '1995', label: '1995' },
      { value: '1996', label: '1996' },
      { value: '1997', label: '1997' },
      { value: '1998', label: '1998' },
      { value: '1999', label: '1999' },
      { value: '2000', label: '2000' },
      { value: '2001', label: '2001' },
      { value: '2002', label: '2002' },
      { value: '2003', label: '2003' },
      { value: '2004', label: '2004' },
      { value: '2005', label: '2005' },
      { value: '2006', label: '2006' },
      { value: '2007', label: '2007' },
      { value: '2008', label: '2008' },
      { value: '2009', label: '2009' },
      { value: '2010', label: '2010' },
      { value: '2011', label: '2011' },
      { value: '2012', label: '2012' },
      { value: '2013', label: '2013' },
      { value: '2014', label: '2014' },
      { value: '2015', label: '2015' },
      { value: '2016', label: '2016' },
      { value: '2017', label: '2017' },
      { value: '2018', label: '2018' },
      { value: '2019', label: '2019' }

    ]

    return (
      <form className="pure-form pure-form-stacked">
        <label className="left" htmlFor="firstName">First name</label>
        <div className="validation-input">
        <Tooltip
                            visible={this.props.formErrors.first_name.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>{this.props.formErrors.first_name}</span>}
                        >
          <input id="first_name" name="first_name" value={this.props.newUser.first_name} onChange={this.props.onChange} className="register-width" type="text" />
          </Tooltip>
          <span className={'checkmark ' + ((this.props.validation.first_name) ? '' : 'hide')}>
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </span>
          <span className={'checkmark ' + ((this.props.formErrors.first_name.length > 0) ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
        </div>
        <label className="left" htmlFor="lastName">Last name</label>
        <div className="validation-input">
        <Tooltip
                            visible={this.props.formErrors.last_name.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>{this.props.formErrors.last_name}</span>}
                        >
          <input id="last_name" name="last_name" value={this.props.newUser.last_name} onChange={this.props.onChange} className="lastName register-width" type="text" />
          </Tooltip>
          <span className={'checkmark ' + ((this.props.validation.last_name) ? '' : 'hide')}>
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </span>
          <span className={'checkmark ' + ((this.props.formErrors.last_name.length > 0) ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
        </div>
        <label className="left" htmlFor="date">Date of birth</label>
        <div className="validation-input">

          <div className="date">
            <Select name={"date"} value={this.props.newUser.date} onChange={this.props.onDateChange} isSearchable={false} isClearable={false} classNamePrefix="date-single" options={dates} placeholder={'Date'} />
            <span className={'checkmark date-select-checkmark ' + ((this.props.validation.date) ? '' : 'hide')}>
              <div className="checkmark_circle"></div>
              <div className="checkmark_stem"></div>
              <div className="checkmark_kick"></div>
            </span>
            <span className={'checkmark date-select-checkmark ' + ((this.props.formErrors.date.length > 0) ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
          </div>
          <div className="month">
            <Select name={"month"} value={this.props.newUser.month} onChange={this.props.onMonthChange} isSearchable={false} isClearable={false} classNamePrefix="month-single" options={months} placeholder={'Month'} />
            <span className={'checkmark month-select-checkmark ' + ((this.props.validation.month) ? '' : 'hide')}>
              <div className="checkmark_circle"></div>
              <div className="checkmark_stem"></div>
              <div className="checkmark_kick"></div>
            </span>
            <span className={'checkmark month-select-checkmark ' + (this.props.formErrors.month.length > 0 ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
          </div>
          <div className="year">
          <Tooltip
                            visible={this.props.formErrors.year.length > 0 || this.props.formErrors.month.length > 0 || this.props.formErrors.date.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>
                              <div>{this.props.formErrors.date}</div> 
                              <div>{this.props.formErrors.month}</div>
                              <div>{this.props.formErrors.year}</div>
                              </span>}
                        >
            <Select name={"year"} value={this.props.newUser.year} onChange={this.props.onYearChange} isSearchable={false} isClearable={false} classNamePrefix="year-single" options={years} placeholder={'Year'} />
            </Tooltip>
            <span className={'checkmark year-select-checkmark ' + ((this.props.validation.year) ? '' : 'hide')}>
              <div className="checkmark_circle"></div>
              <div className="checkmark_stem"></div>
              <div className="checkmark_kick"></div>
            </span>
            <span className={'checkmark year-select-checkmark ' + (this.props.formErrors.year.length > 0 ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
          </div>
        </div>
      </form>
    )
  }
}

class RegisterStepTwo extends Component {

  constructor(props) {
    super(props);
  }

  isValidated() {
    this.props.validateField('email', this.props.newUser.email);
    this.props.validateField('phone', this.props.newUser.phone);
    return this.props.validation.email;
  }

  goBack() {
    this.props.jumpToStep(this.props.step-1);
  }


  render() {
    return (
      <form className="pure-form pure-form-stacked">

        <label className="left" htmlFor="email">Email</label>
        <div className="validation-input">
        <Tooltip
                            visible={this.props.formErrors.email.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>{this.props.formErrors.email}</span>}
                        >
          <input id="email" name="email" value={this.props.newUser.email} onChange={this.props.onChange} className="register-width" type="text" />
          </Tooltip>
          <span className={'checkmark ' + ((this.props.validation.email) ? '' : 'hide')}>
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </span>
          <span className={'checkmark ' + ((this.props.formErrors.email.length > 0) ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
        </div>
        <label className="left" htmlFor="phone">Phone</label>
        <div className="validation-input">
        <Tooltip
                            visible={this.props.formErrors.phone.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>{this.props.formErrors.phone}</span>}
                        >
          <input id="phone" name="phone" value={this.props.newUser.phone} onChange={this.props.onChange} className="register-width" type="number" />
          </Tooltip>
          <span className={'checkmark ' + ((this.props.validation.phone) ? '' : 'hide')}>
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </span>
          <span className={'checkmark ' + ((this.props.formErrors.phone.length > 6) ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
        </div>

      </form>
    )
  }
}
