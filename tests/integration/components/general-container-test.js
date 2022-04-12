import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | general-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a header with a title and settings button', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GeneralContainer />`);

    assert.dom('header').exists('header exists');
    assert.dom('[data-test-title]').hasText('Wakeskate?', 'title is Wakekate?');
  });
});
