import CoreSDK, { CtorOpts } from 'changelog-core';

class BarSDK extends CoreSDK {
  private element: HTMLDivElement;
  public isOpen: boolean;

  constructor(opts: CtorOpts) {
    super(Object.assign(opts, {
      mode: 'bar'
    }));

    // Create a container-element for the iframe
    this.element = document.createElement('div');
    this.element.setAttribute('changes-bar', '');
    this.element.style.position = 'fixed';
    this.element.style.top = '0px';
    this.element.style.bottom = '0px';
    this.element.style.width = '350px';
    this.element.style.right = '-350px';
    this.element.style.zIndex = '50000';
    this.element.style.transition = 'all .3s ease-in-out';
    this.element.style.boxShadow = '0 1px 30px rgba(0, 0, 0, 0.09)';
    this.element.appendChild(this.iframe);
    document.body.appendChild(this.element);

    this.isOpen = false;

    this.on('message', message => {
      if (message.type == 'changes-close') {
        this.close();
      }
    });
  }

  public remove() {
    if (!this.element) return false;

    this.element.remove();

    return super.remove();
  }

  public open() {
    this.element.style.right = '0px';
    this.isOpen = true;
  }

  public close() {
    this.element.style.right = '-350px';
    this.isOpen = false;
  }

  public toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}

export default BarSDK;
