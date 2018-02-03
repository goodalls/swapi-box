import React from 'react';
import ReactDOM from 'react-dom';
import api from './api';
import { shallow } from 'enzyme';

describe('api', () => {
  let mockFunction;
  let mockEvent;
  let mockURL;

  beforeAll(() => {
    mockFunction = jest.fn();
    mockEvent = { preventDefault: jest.fn() };
    mockURL = 'http://test.com/';
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            status: 200,
            crawl: {},
            results: [
              {
                name: '',
                species: '',
                homeworld: '',
                population: '',
                title: '',
                episodeID: '',
                openingCrawl: '',
                releaseDate: ''
              }
            ]
          })
      })
    );
  });

  describe('fetchSwapi', () => {
    it('fetchSwapi should fetch the passed down url', () => {
      api.fetchSwapi(mockURL);
      expect(window.fetch).toHaveBeenCalledWith(mockURL);
    });

    it('should return data object after promise resolves', async () => {
      const actual = await api.fetchSwapi(mockURL);
      expect(actual).toEqual({
        crawl: {},
        results: [
          {
            name: '',
            species: '',
            homeworld: '',
            population: '',
            title: '',
            episodeID: '',
            openingCrawl: '',
            releaseDate: ''
          }
        ],
        status: 200
      });
    });

    it('fetchSwapi should error if not resolved', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 404,
          json: () => Promise.reject('fetchSwapi Error')
        })
      );

      const error = await api.fetchSwapi(mockURL);
      expect(error).toEqual('fetchSwapi Error');
    });

    describe('peopleCards', () => {
      it.skip('should return an array of objects', async () => {
        const callFunction = await api.peopleCards();
        expect(callFunction).toEqual(
          Promise.resolve([
            {
              name: '',
              species: '',
              homeworld: '',
              population: ''
            },
            {
              name: '',
              species: '',
              homeworld: '',
              population: ''
            }
          ])
        );
      });
    });
    describe('planetCards', () => {
      it.skip('should return an array of objects', async () => {
        const callFunction = await api.peopleCards();
        expect(callFunction).toEqual(
          Promise.resolve([
            {
              name: '',
              species: '',
              homeworld: '',
              population: ''
            },
            {
              name: '',
              species: '',
              homeworld: '',
              population: ''
            }
          ])
        );
      });
    });
    describe('vehicleCards', () => {
      it.skip('should return an array of objects', async () => {
        const callFunction = await api.peopleCards();
        expect(callFunction).toEqual(
          Promise.resolve([
            {
              name: '',
              species: '',
              homeworld: '',
              population: ''
            },
            {
              name: '',
              species: '',
              homeworld: '',
              population: ''
            }
          ])
        );
      });
    });

    describe('fetchScrollingText', () => {
      it.skip('should return an array of objects', async () => {
        window.fetch = jest.fn().mockImplementation(() =>
          Promise.resolve({
            status: 200,
            json: () =>
              Promise.resolve({
                status: 200,
                title: 'hi',
                episodeID: '4',
                openingCrawl: 'stuff',
                releaseDate: '05-04-1976'
              })
          })
        );
        const callFunction = await api.fetchScrollingText();
        await expect(callFunction).toEqual({
          title: 'hi',
          episodeID: '4',
          openingCrawl: 'stuff',
          releaseDate: '05-04-1976'
        });
      });
    });
  });
});
