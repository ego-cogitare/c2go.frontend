import React from 'react';

export default class Textarea extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  componentWillReceiveProps(props) {
    this.setState({ ...props });
  }

  reset() {
    this.setState({ value: '' }, () => this.refs.textarea.value = '');
  }

  render() {
    return (
      <div class="textarea-wrapper">
        <div class="textarea-title">{this.state.label}</div>
        <textarea
          ref="textarea"
          class="textarea"
          placeholder={this.state.placeholder}
          maxLength={this.state.maxLength}
          onChange={(e) => {
            this.setState({ value: e.target.value });
            this.props.onChange && this.props.onChange(e.target.value);
          }}
          {...this.props.inputProps}
        >
          {this.state.value}
        </textarea>
        { this.state.error && <small class="error left">{this.state.error}</small> }
        <div class="textarea-chars-left right">{(this.state.value || '').length}/{this.state.maxLength}</div>
      </div>
    );
  }
}
