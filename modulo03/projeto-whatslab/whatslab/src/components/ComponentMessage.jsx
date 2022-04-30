import React from "react";
import styled from "styled-components";

const ContainerWhats = styled.div`
  display: flex;
  flex-direction: column;
`;
const Whats = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: ${(props) => props.row};
  justify-content: space-between;
  p {
    padding: 4px;
    border-radius: 5px;
    background-color: #80ff80;
    max-width: 80%;
    word-wrap: break-word;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    display: flex;
    align-content: space-around;
    gap: 10px;
  }
`;
const Inputs = styled.div`
  display: flex;
  height: 30px;
  padding: 10px;
`;

const InputName = styled.input`
  width: 25%;
  border: 1px solid #ece5dd;
`;

const InputMessage = styled.input`
  width: 65%;
  border: 1px solid #ece5ddcd;
`;
const InputSubmit = styled.input`
  width: 10%;
  cursor: pointer;
  transition: all 0.5s;
    &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    }
`;

class ComponentMessage extends React.Component {
  state = {
    idMessage: 1,
    nameValue: "",
    textValue: "",
    message: []
  };

  // -- New message ID Method --
  sumIdMessage = () => {
    this.setState({ idMessage: this.state.idMessage + 1 });
  };
  // -- Inputs Target Value Method --
  onChangeName = (event) => {
    this.setState({ nameValue: event.target.value });
  };
  onChangeText = (event) => {
    this.setState({ textValue: event.target.value });
  };

  // -- Inputs Validation to Array copy and new message ID --
  onClickBtn = () => {
    if (this.state.nameValue && this.state.textValue) {
      this.sumIdMessage();
      const newNameText = {
        id: this.state.idMessage,
        name: this.state.nameValue,
        text: this.state.textValue
      };
      const newNameTextMessage = [newNameText, ...this.state.message];
      this.setState({ message: newNameTextMessage, textValue: "" });
    } else {
      alert("Complete all inputs");
    }
  };

  // -- Enter Submit Method --
  onKeyDownMessage = (event) => {
    if (event.keyCode === 13) {
      this.onClickBtn();
    }
  };

  // -- Cancel Method --
  delMessage = () => {
    const deletedMessage = this.state.message.filter((idUser) => {
      return idUser.idMessage !== this.state.message.idMessage;
    });
    this.setState({ message: deletedMessage });
  };

  // -- "div/Whatsapp" -> attribute changes about "nameValue" --   
  rowStyle = () => {
    const itsMe = this.state.nameValue.toLowerCase();
    if (itsMe === "eu") {
      return "row-reverse";
    }
  };

  render() {
    // -- Consoles Debug --
    //console.log(this.state.nameValue.toLowerCase());
    // console.log(this.rowStyle());
    // console.log(this.state.message);
    //console.log(this.state.nameValue, this.state.textValue);
    // console.log(this.state.message);
    return (
      <ContainerWhats>
        {this.state.message.map((obj, i) => (
          <Whats row={this.rowStyle()} key={i}>
            <p>
              <b>{obj.name}:</b> {obj.text}
            </p>

            <img
              src={this.props.source}
              alt={this.props.alternative}
              onClick={this.delMessage}
            />
          </Whats>
        ))}

        <Inputs>
          <InputName
            type="text"
            placeholder={"Name"}
            value={this.state.nameValue}
            onChange={this.onChangeName}
            autoFocus={true}
          />

          <InputMessage
            type="text"
            placeholder={"Message"}
            value={this.state.textValue}
            onChange={this.onChangeText}
            onKeyDown={this.onKeyDownMessage}
          />

          <InputSubmit type={"submit"} value={"→"} onClick={this.onClickBtn} />
        </Inputs>
      </ContainerWhats>
    );
  }
}

export default ComponentMessage;
