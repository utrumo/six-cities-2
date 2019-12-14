import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomSelect, {Classes, Events, Keys} from './custom-select.jsx';

configure({adapter: new Adapter()});

describe(`keyboard keys`, () => {
  it(`Should open popup and call preventDefault if focused and space pressed`, () => {
    const tree = shallow(
        <CustomSelect label="testLabel" options={[`first`, `second`]} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const spaceEvt = {preventDefault: jest.fn(), key: Keys.SPACE};

    let optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();

    header.simulate(Events.KEY_DOWN, spaceEvt);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeTruthy();
    expect(spaceEvt.preventDefault).toHaveBeenCalledTimes(1);
  });

  it(`Should close popup if esc pressed`, () => {
    const tree = shallow(
        <CustomSelect label="testLabel" options={[`first`, `second`]} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const spaceEvt = {preventDefault: jest.fn(), key: Keys.SPACE};
    const escEvt = {key: Keys.ESCAPE};

    let optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();

    header.simulate(Events.KEY_DOWN, spaceEvt);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeTruthy();

    header.simulate(Events.KEY_DOWN, escEvt);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();
  });

  it(`Should preventDefault and close popup on tab, if it was opened`, () => {
    const tree = shallow(
        <CustomSelect label="testLabel" options={[`first`, `second`]} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const spaceEvt = {preventDefault: jest.fn(), key: Keys.SPACE};
    const tabEvt = {preventDefault: jest.fn(), key: Keys.TAB};

    header.simulate(Events.KEY_DOWN, tabEvt);
    expect(tabEvt.preventDefault).not.toHaveBeenCalled();

    let optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();

    header.simulate(Events.KEY_DOWN, spaceEvt);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeTruthy();

    header.simulate(Events.KEY_DOWN, tabEvt);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();
    expect(tabEvt.preventDefault).toHaveBeenCalledTimes(1);

    header.simulate(Events.KEY_DOWN, tabEvt);
    expect(tabEvt.preventDefault).toHaveBeenCalledTimes(1);
  });

  it(`Should toggle popup on Enter`, () => {
    const tree = shallow(
        <CustomSelect label="testLabel" options={[`first`, `second`]} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const enterEvt = {key: Keys.ENTER};

    let optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();

    header.simulate(Events.KEY_DOWN, enterEvt);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeTruthy();

    header.simulate(Events.KEY_DOWN, enterEvt);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();
  });

  it(`Should preventDefault on any arrows pressed`, () => {
    const tree = shallow(
        <CustomSelect label="testLabel" options={[`first`, `second`]} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const upEvt = {preventDefault: jest.fn(), key: Keys.ARROW_UP};
    const downEvt = {preventDefault: jest.fn(), key: Keys.ARROW_DOWN};
    const leftEvt = {preventDefault: jest.fn(), key: Keys.ARROW_LEFT};
    const rightEvt = {preventDefault: jest.fn(), key: Keys.ARROW_RIGHT};

    header.simulate(Events.KEY_DOWN, upEvt);
    expect(upEvt.preventDefault).toHaveBeenCalledTimes(1);

    header.simulate(Events.KEY_DOWN, downEvt);
    expect(downEvt.preventDefault).toHaveBeenCalledTimes(1);

    header.simulate(Events.KEY_DOWN, leftEvt);
    expect(leftEvt.preventDefault).toHaveBeenCalledTimes(1);

    header.simulate(Events.KEY_DOWN, rightEvt);
    expect(rightEvt.preventDefault).toHaveBeenCalledTimes(1);
  });

  it(`Should select next option on down arrow`, () => {
    const options = [`first`, `second`];
    const tree = shallow(
        <CustomSelect label="testLabel" options={options} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const downEvt = {preventDefault: jest.fn(), key: Keys.ARROW_DOWN};

    expect(tree.instance()._value).toEqual(options[0]);
    header.simulate(Events.KEY_DOWN, downEvt);
    expect(tree.instance()._value).toEqual(options[1]);
  });

  it(`Should select next option on right arrow`, () => {
    const options = [`first`, `second`];
    const tree = shallow(
        <CustomSelect label="testLabel" options={options} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const rightEvt = {preventDefault: jest.fn(), key: Keys.ARROW_RIGHT};

    expect(tree.instance()._value).toEqual(options[0]);
    header.simulate(Events.KEY_DOWN, rightEvt);
    expect(tree.instance()._value).toEqual(options[1]);
  });

  it(`Should select prev option on up arrow`, () => {
    const options = [`first`, `second`];
    const tree = shallow(
        <CustomSelect label="testLabel" options={options} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const downEvt = {preventDefault: jest.fn(), key: Keys.ARROW_DOWN};
    const upEvt = {preventDefault: jest.fn(), key: Keys.ARROW_UP};

    expect(tree.instance()._value).toEqual(options[0]);
    header.simulate(Events.KEY_DOWN, downEvt);
    expect(tree.instance()._value).toEqual(options[1]);

    header.simulate(Events.KEY_DOWN, upEvt);
    expect(tree.instance()._value).toEqual(options[0]);
  });

  it(`Should select prev option on left arrow`, () => {
    const options = [`first`, `second`];
    const tree = shallow(
        <CustomSelect label="testLabel" options={options} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const downEvt = {preventDefault: jest.fn(), key: Keys.ARROW_DOWN};
    const leftEvt = {preventDefault: jest.fn(), key: Keys.ARROW_LEFT};

    expect(tree.instance()._value).toEqual(options[0]);
    header.simulate(Events.KEY_DOWN, downEvt);
    expect(tree.instance()._value).toEqual(options[1]);

    header.simulate(Events.KEY_DOWN, leftEvt);
    expect(tree.instance()._value).toEqual(options[0]);
  });

  it(`Should disable right arrow if popup opened`, () => {
    const options = [`first`, `second`];
    const tree = shallow(
        <CustomSelect label="testLabel" options={options} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const spaceEvt = {preventDefault: jest.fn(), key: Keys.SPACE};
    const rightEvt = {preventDefault: jest.fn(), key: Keys.ARROW_RIGHT};

    let optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();

    header.simulate(Events.KEY_DOWN, spaceEvt);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeTruthy();
    expect(tree.instance()._value).toEqual(options[0]);

    header.simulate(Events.KEY_DOWN, rightEvt);
    expect(tree.instance()._value).toEqual(options[0]);
  });

  it(`Should disable left arrow if popup opened`, () => {
    const options = [`first`, `second`];
    const tree = shallow(
        <CustomSelect label="testLabel" options={options} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const spaceEvt = {preventDefault: jest.fn(), key: Keys.SPACE};
    const rightEvt = {preventDefault: jest.fn(), key: Keys.ARROW_RIGHT};
    const leftEvt = {preventDefault: jest.fn(), key: Keys.ARROW_LEFT};

    expect(tree.instance()._value).toEqual(options[0]);
    header.simulate(Events.KEY_DOWN, rightEvt);
    expect(tree.instance()._value).toEqual(options[1]);

    let optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();

    header.simulate(Events.KEY_DOWN, spaceEvt);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeTruthy();
    expect(tree.instance()._value).toEqual(options[1]);

    header.simulate(Events.KEY_DOWN, leftEvt);
    expect(tree.instance()._value).toEqual(options[1]);
  });

  it(`Shouldn't try to change to next option if current is last`, () => {
    const options = [`first`, `second`];
    const tree = shallow(
        <CustomSelect label="testLabel" options={options} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const rightEvt = {preventDefault: jest.fn(), key: Keys.ARROW_RIGHT};

    expect(tree.instance()._value).toEqual(options[0]);
    header.simulate(Events.KEY_DOWN, rightEvt);
    expect(tree.instance()._value).toEqual(options[1]);

    header.simulate(Events.KEY_DOWN, rightEvt);
    expect(tree.instance()._value).toEqual(options[1]);
  });

  it(`Shouldn't try to change to prev option if current is first`, () => {
    const options = [`first`, `second`];
    const tree = shallow(
        <CustomSelect label="testLabel" options={options} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const rightEvt = {preventDefault: jest.fn(), key: Keys.ARROW_RIGHT};
    const leftEvt = {preventDefault: jest.fn(), key: Keys.ARROW_LEFT};

    expect(tree.instance().state.index).toEqual(0);
    header.simulate(Events.KEY_DOWN, rightEvt);
    expect(tree.instance().state.index).toEqual(1);

    header.simulate(Events.KEY_DOWN, leftEvt);
    expect(tree.instance().state.index).toEqual(0);

    header.simulate(Events.KEY_DOWN, leftEvt);
    expect(tree.instance().state.index).toEqual(0);
  });

  it(`Should set active class on current option`, () => {
    const values = [`first`, `second`];
    const tree = shallow(
        <CustomSelect label="testLabel" options={values} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const spaceEvt = {preventDefault: jest.fn(), key: Keys.SPACE};
    const downEvt = {preventDefault: jest.fn(), key: Keys.ARROW_DOWN};

    let optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();

    header.simulate(Events.KEY_DOWN, spaceEvt);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeTruthy();

    let options = tree.find(`.${Classes.OPTION}`);
    expect(options.at(0).hasClass(Classes.OPTION_ACTIVE)).toBeTruthy();
    expect(options.at(1).hasClass(Classes.OPTION_ACTIVE)).toBeFalsy();

    header.simulate(Events.KEY_DOWN, downEvt);

    options = tree.find(`.${Classes.OPTION}`);
    expect(options.at(0).hasClass(Classes.OPTION_ACTIVE)).toBeFalsy();
    expect(options.at(1).hasClass(Classes.OPTION_ACTIVE)).toBeTruthy();
  });

  it(`Should call callback with new value when select next option by keyboard`, () => {
    const optionValues = [`first`, `second`];
    const onChange = jest.fn();
    const tree = shallow(
        <CustomSelect label="testLabel" options={optionValues} onChange={onChange} />
    );
    const downEvt = {preventDefault: jest.fn(), key: Keys.ARROW_DOWN};
    const header = tree.find(`.${Classes.HEADER}`);

    expect(onChange).not.toHaveBeenCalled();
    header.simulate(Events.KEY_DOWN, downEvt);
    expect(onChange).toHaveBeenNthCalledWith(1, optionValues[1]);
  });

  it(`Should call callback with new value when select prev option by keyboard`, () => {
    const optionValues = [`first`, `second`];
    const onChange = jest.fn();
    const tree = shallow(
        <CustomSelect label="testLabel" options={optionValues} onChange={onChange} />
    );
    const downEvt = {preventDefault: jest.fn(), key: Keys.ARROW_DOWN};
    const upEvt = {preventDefault: jest.fn(), key: Keys.ARROW_UP};
    const header = tree.find(`.${Classes.HEADER}`);

    expect(onChange).not.toHaveBeenCalled();
    header.simulate(Events.KEY_DOWN, downEvt);
    expect(onChange).toHaveBeenNthCalledWith(1, optionValues[1]);

    header.simulate(Events.KEY_DOWN, upEvt);
    expect(onChange).toHaveBeenNthCalledWith(2, optionValues[0]);
  });
});

describe(`Mouse`, () => {
  it(`Should toggle popup if clicked several times`, () => {
    const options = [`first`, `second`];
    const tree = shallow(
        <CustomSelect label="testLabel" options={options} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);

    let optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();

    header.simulate(Events.CLICK);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeTruthy();

    header.simulate(Events.CLICK);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();
  });

  it(`Should close popup if clicked not on the select`, () => {
    const documentListeners = {};
    const spy = jest.spyOn(document, `addEventListener`).mockImplementation((evt, cb) => {
      documentListeners[evt] = cb;
    });

    document.addEventListener = jest.fn((evt, cb) => {
      documentListeners[evt] = cb;
    });

    const options = [`first`, `second`];
    const tree = mount(
        <div>
          <button />
          <CustomSelect label="testLabel" options={options} onChange={jest.fn()} />
        </div>
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const button = tree.find(`button`);

    let optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();

    header.simulate(Events.CLICK);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeTruthy();

    documentListeners.click({target: button.instance()});
    tree.update();
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();

    spy.mockRestore();
  });

  it(`Should select option by click`, () => {
    const optionValues = [`first`, `second`];
    const tree = shallow(
        <CustomSelect label="testLabel" options={optionValues} onChange={jest.fn()} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const secondOption = tree.find(`.${Classes.OPTION}`).at(1);

    let optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();

    header.simulate(Events.CLICK);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeTruthy();

    expect(tree.instance()._value).toEqual(optionValues[0]);
    secondOption.simulate(Events.CLICK);
    expect(tree.instance()._value).toEqual(optionValues[1]);
  });

  it(`Should call callback with new value when click on option`, () => {
    const optionValues = [`first`, `second`];
    const onChange = jest.fn();
    const tree = shallow(
        <CustomSelect label="testLabel" options={optionValues} onChange={onChange} />
    );
    const header = tree.find(`.${Classes.HEADER}`);
    const secondOption = tree.find(`.${Classes.OPTION}`).at(1);

    let optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeFalsy();

    header.simulate(Events.CLICK);
    optionsList = tree.find(`.${Classes.OPTIONS}`);
    expect(optionsList.hasClass(Classes.OPTIONS_OPENED)).toBeTruthy();

    expect(onChange).not.toHaveBeenCalled();
    secondOption.simulate(Events.CLICK);
    expect(onChange).toHaveBeenNthCalledWith(1, optionValues[1]);
  });
});

describe(`Props test`, () => {
  it(`Should render with given option active if prop value set`, () => {
    const options = [`first`, `second`];
    const onChange = jest.fn();
    const tree = shallow(
        <CustomSelect label="testLabel" options={options} onChange={onChange} value={options[1]} />
    );
    const optionsEls = tree.find(`.${Classes.OPTION}`);

    expect(optionsEls.at(0).hasClass(Classes.OPTION_ACTIVE)).toBeFalsy();
    expect(optionsEls.at(1).hasClass(Classes.OPTION_ACTIVE)).toBeTruthy();
  });

  it(`Should change active option if value prop was changed`, () => {
    const options = [`first`, `second`];
    const onChange = jest.fn();
    const tree = shallow(
        <CustomSelect label="testLabel" options={options} onChange={onChange} value={options[1]} />
    );
    let optionEls = tree.find(`.${Classes.OPTION}`);
    expect(optionEls.at(0).hasClass(Classes.OPTION_ACTIVE)).toBeFalsy();
    expect(optionEls.at(1).hasClass(Classes.OPTION_ACTIVE)).toBeTruthy();

    tree.setProps({value: options[0]});
    optionEls = tree.find(`.${Classes.OPTION}`);
    expect(optionEls.at(0).hasClass(Classes.OPTION_ACTIVE)).toBeTruthy();
    expect(optionEls.at(1).hasClass(Classes.OPTION_ACTIVE)).toBeFalsy();
  });
});
