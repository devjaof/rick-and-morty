import { module, test } from 'qunit';
import { setupTest } from 'rick-and-morty/tests/helpers';

module('Unit | Model | episode', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('episode', {});
    assert.ok(model);
  });
});
