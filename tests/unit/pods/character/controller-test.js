import { module, test } from 'qunit';
import { setupTest } from 'rick-and-morty/tests/helpers';

module('Unit | Controller | character', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:character');
    assert.ok(controller);
  });
});
