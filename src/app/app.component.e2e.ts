'use strict';

describe('App', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        let subject = browser.getTitle();
        let result = 'Dustin Atwood';
        expect(subject).toEqual(result);
    });

    it('should have header', () => {
        let subject = element(by.tagName('h1')).isPresent();
        expect(subject).toEqual(true);
    });

    it('should have correct header text', () => {
        let subject = element(by.tagName('h1'));
        expect(subject.getText()).toBe('Dustin Atwood');
    });

    it('should have footer', () => {
        let subject = element(by.tagName('footer')).isPresent();
        expect(subject).toEqual(true);
    });
});
