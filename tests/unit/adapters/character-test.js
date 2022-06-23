import { module, test } from 'qunit';
import { setupTest } from 'rick-and-morty/tests/helpers';

module('Unit | Adapter | character', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:character');
    assert.ok(adapter);
  });
});
