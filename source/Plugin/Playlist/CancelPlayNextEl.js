import { getComponent, registerComponent } from 'video.js';

const ClickableComponent = getComponent('ClickableComponent');

class CancelPlayNextEl extends ClickableComponent {
  constructor(player, options) {
    super(player, options);

    this.el_.querySelector('.vjs-icon-placeholder').innerHTML = this.localize(options.text);
  }

  buildCSSClass() {
    return `vjs-cancel-playnext ${this.options_.className}`;
  }

  handleClick() {
    this.player_
      .getChild('BeforePlayNextLayer')
      .cancel()
      .dispose();
  }
}

CancelPlayNextEl.prototype.controlText_ = 'Cancel PlayNext';

registerComponent('CancelPlayNextEl', CancelPlayNextEl);

export default CancelPlayNextEl;
