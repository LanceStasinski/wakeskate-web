import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | map', function (hooks) {
  setupRenderingTest(hooks);

  test('it does not render a select location button when search has not been completed', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('hasSearched', false);
    await render(hbs`<Map />`);
    assert
      .dom('[data-test-map-title]')
      .hasText('Search for your desired location');
    assert.dom('input').exists({count: 1});
    assert.dom('[data-test-blue-button]');
  });

  test('it renders a select location button when search is completed', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('hasSearched', true);
    await render(hbs`<Map />`);
    assert
      .dom('[data-test-map-title]')
      .hasText('Search for your desired location');
    assert.dom('input').exists();
    assert.dom('[data-test-blue-button]').exists({count: 2});
  });
});
