'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Blogproject', function() {


    it('should automatically redirect to /view_posts when location hash/fragment is empty', function() {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/posts");
    });

  /*  describe('view_posts', function() {

        beforeEach(function() {
            browser.get('dashboard.html.old/#/posts');
        });


        it('should render view_posts when user navigates to /#/posts', function() {
            expect(element.all(by.css('[ng-view] a')).first().getText()).
            toMatch(/ New Post/);
        });

    });


    describe('view_profile', function() {

        beforeEach(function() {
            browser.get('dashboard.html.old/#/profile/57deff1a5e9c7b023b87e96b');
        });


        it('should render view_profile when user navigates to /profile', function() {
            expect(element.all(by.css('[ng-view] strong')).first().getText()).
            toMatch(/eloverflow/);
        });

    });*/
});