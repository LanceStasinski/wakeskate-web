import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | blue-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a blue button', async function (assert) {
    await render(hbs`<BlueButton>Click</BlueButton>`);

    assert.dom('[data-test-blue-button]').hasText('Click');
    assert.dom('[data-test-blue-button]').hasClass('bg-blue-600');
  });
});
