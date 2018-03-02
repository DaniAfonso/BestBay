var TwitterStrategy = require('passport-twitter').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var GitHubStrategy = require('passport-github').Strategy;

var config = require('./config');

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });

    passport.use(new TwitterStrategy({
        consumerKey: config.twitter.key,
        consumerSecret: config.twitter.secret,
        callbackURL: 'auth/twitter/callback'
    }, function (accessToken, refreshToken, profile, done) {
        console.log(profile);
    }));

    passport.use(new FacebookStrategy({
        clientID: config.twitter.key,
        clientSecret: config.twitter.secret,
        callbackURL: 'auth/facebook/callback',
        profileFields: ['id', 'displayName', 'provider', 'photos']
    }, function (accessToken, refreshToken, profile, done) {
        console.log(profile);
    }));

    passport.use(new GoogleStrategy({
        clientID: config.google.key,
        clientSecret: config.google.secret,
        callbackURL: 'auth/google/callback',
    }, function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
    }));

    passport.use(new GitHubStrategy({
        clientID: config.google.key,
        clientSecret: config.google.secret,
        callbackURL: 'auth/google/callback',
    }, function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
    }));
}