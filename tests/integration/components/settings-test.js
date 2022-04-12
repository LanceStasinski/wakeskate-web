import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | settings', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Settings />`);
    assert.dom('[data-test-settings]').exists('settings button exists');
    assert.strictEqual(
      this.element.querySelector('img')?.getAttribute('src'),
      '/assets/icons/settings.svg',
      'src directs to settings.svg'
    );
    assert.strictEqual(
      this.element.querySelector('img')?.getAttribute('alt'),
      'Settings icon',
      'image has alt text'
    );
  });
});
