"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from '../components/MobileClient';
import MobileCompany from '../components/MobileCompany';

test('работа MobileClient удалить клиента', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку
  const buttonElem = component.root.find( el => el.type=='input' && el.props.value == 'Удалить'); 
  // и "нажмём" на неё
  buttonElem.props.onClick();

//   // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElem.props.onClick();
  
  // и получаем окончательный снэпшот
   componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  /*
  // можно эмулировать события, передавая в качестве объекта события то что нам нужно:
  wrapper.find('select').simulate('change', {
    target: { value: "hello" },
  });
  */

});
