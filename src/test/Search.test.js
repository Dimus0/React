import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Search from './Searchtest';
import { act } from 'react';
import '@testing-library/jest-dom/extend-expect';


describe('Search Component Tests', () => {
  test('відображає поля введення та кнопку пошуку', () => {
    render(<Search />);

    const homeInput = screen.getByPlaceholderText(/Home/i);
    const awayInput = screen.getByPlaceholderText(/Away/i);
    const searchButton = screen.getByText(/Search/i);

    expect(homeInput).toBeInTheDocument();
    expect(awayInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test('знаходить і показує збіги при натисканні кнопки пошуку', async () => {
    render(<Search />);

    const homeInput = screen.getByPlaceholderText(/Home/i);
    const awayInput = screen.getByPlaceholderText(/Away/i);
    const searchButton = screen.getByText(/Search/i);

    fireEvent.change(homeInput, { target: { value: 'ПСЖ' } });
    fireEvent.change(awayInput, { target: { value: 'Челсі' } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      const matchInfo = screen.getByText(/ПСЖ VS Челсі/i);
      expect(matchInfo).toBeInTheDocument();
    });
  });

  test('виводить  "Матч не знайдено"якщо збігів не знайдено', async () => {

    render(<Search />);

    const homeInput = screen.getByPlaceholderText(/Home/i);
    const awayInput = screen.getByPlaceholderText(/Away/i);
    const searchButton = screen.getByText(/Search/i);

    fireEvent.change(homeInput, { target: { value: 'A' } });
    fireEvent.change(awayInput, { target: { value: 'Челсі' } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      const noMatchText = screen.getByText(/Матч не знайдено/i);
      expect(noMatchText).toBeInTheDocument();
    });
  });
});

test('виконує пошук із різними значеннями полів введення', async () => {
  render(<Search />);

  const homeInput = screen.getByPlaceholderText(/Home/i);
  const awayInput = screen.getByPlaceholderText(/Away/i);
  const searchButton = screen.getByText(/Search/i);

  // Пошук за першими значеннями
  fireEvent.change(homeInput, { target: { value: 'Аякс' } });
  fireEvent.change(awayInput, { target: { value: 'Ліверпуль' } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    const matchInfo = screen.getByText(/Ліверпуль VS Аякс/i);
    expect(matchInfo).toBeInTheDocument();
  });

  fireEvent.change(homeInput, { target: { value: 'Барсел' } });
  fireEvent.change(awayInput, { target: { value: 'Інтер Мілан' } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    const matchInfo = screen.getByText(/Барселона VS Інтер Мілан/i);
    const scoreInfo = screen.getByText(/1 : 2/i);
    expect(matchInfo).toBeInTheDocument();
    expect(scoreInfo).toBeInTheDocument();
  });
});

test('тест пошук із перевіркою часу та рахунку', async () =>{
  render(<Search />);

  const homeInput = screen.getByPlaceholderText(/Home/i);
  const awayInput = screen.getByPlaceholderText(/Away/i);
  const searchButton = screen.getByText(/Search/i);

  // Пошук за першими значеннями
  fireEvent.change(homeInput, { target: { value: 'Баварія' } });
  fireEvent.change(awayInput, { target: { value: 'Манчестер Сіті' } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    const matchInfo = screen.getByText(/Баварія VS Манчестер Сіті/i);
    const scoreInfo = screen.getByText(/0 : 0/i);
    const dateInfo = screen.getByText(/Дата та час: 13.05.2024 15:00/i);
    expect(matchInfo).toBeInTheDocument();
    expect(scoreInfo).toBeInTheDocument();
    expect(dateInfo).toBeInTheDocument();
  });
})