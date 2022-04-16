// Unit tests to verify that the searching feature (for the products) is working properly

import React from 'react';
import { render, screen } from '@testing-library/react';

import * as firebaseService from '../firebaseService';
import Products from '../Components/Products';

const mockProductList = [
  {
    key: 'pid_9',
    title: 'Shelf',
    id: '9',
    picture: 'shelf.png',
    price: 20,
    category: 'Furniture',
    description: 'Wooden Shelf',
  },
  {
    key: 'pid_10',
    title: 'Wardrobe',
    id: '10',
    picture: 'wardrobe.png',
    price: 20,
    category: 'Furniture',
    description: 'Wooden Wardrobe',
  },
];

// mock react-navigate useNavigation
const mockedNavigator = jest.fn();
jest.mock('react-router-dom', () => {
  const actualNav = jest.requireActual('react-router-dom');
  return {
    ...actualNav,
    useNavigate: () => mockedNavigator,
  };
});

describe('Products', () => {
  let useStateSpy;
  let getProductsSpy;
  let searchProductSpy;

  beforeEach(() => {
    useStateSpy = jest.spyOn(React, 'useState');
    getProductsSpy = jest.spyOn(firebaseService, 'getProducts');
    searchProductSpy = jest.spyOn(firebaseService, 'searchProduct');
  });

  afterEach(() => {
    searchProductSpy.mockClear();
    getProductsSpy.mockClear();
  });

  test('get the list of products on init', () => {
    useStateSpy
      .mockReturnValueOnce([[], jest.fn()])
      .mockReturnValueOnce([false, jest.fn()]);

    searchProductSpy.mockResolvedValue([]);
    getProductsSpy.mockResolvedValue([...mockProductList]);

    render(<Products />);

    expect(getProductsSpy).toHaveBeenCalled();
  });
  test('filters the correct product by name', () => {
    const wardrobeItem = mockProductList[1];
    searchProductSpy.mockResolvedValue([wardrobeItem]);
    getProductsSpy.mockResolvedValue([]);

    useStateSpy
      .mockReturnValueOnce([[wardrobeItem], jest.fn()])
      .mockReturnValueOnce([true, jest.fn()]);

    const searchValue = 'wardrobe';
    const mockProps = {
      searchValue,
      getCurrProd: jest.fn(),
    };
    const { container } = render(<Products {...mockProps} />);
    const productCollection = container.getElementsByClassName('product');

    expect(searchProductSpy).toHaveBeenCalledWith(searchValue);
    expect(productCollection.length).toEqual(1);
    expect(productCollection[0].querySelector('.title').textContent).toEqual(
      wardrobeItem.title
    );
  });
});
