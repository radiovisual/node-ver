import test from 'ava';
import fn from './';

test('returns object', t => {
	t.is(typeof fn(), 'object');
});

test('returns full string', t => {
	t.is(typeof fn().full, 'string');
});

test('returns semver numbers', t => {
	t.is(typeof fn().major, 'number');
	t.is(typeof fn().minor, 'number');
	t.is(typeof fn().patch, 'number');
});

test('returns semver values', t => {
	t.true(fn().major >= 0);
	t.true(fn().minor >= 0);
	t.true(fn().patch >= 0);
});
