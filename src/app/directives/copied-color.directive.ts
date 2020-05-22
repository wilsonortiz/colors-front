import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';
//plugins
import { ClipboardService } from 'ngx-clipboard';

@Directive({
  selector: '[appCopiedColor]'
})
export class CopiedColorDirective{

  constructor(private renderer: Renderer2, private elmRef: ElementRef,  private _clipboardService: ClipboardService) { }
  
  @HostListener('click') copy(){
    const divColor = this.elmRef.nativeElement.children.divColor;

    if(divColor != undefined && this._clipboardService.copyFromContent(divColor.lastElementChild.textContent)){

      while(divColor.firstChild) {
        this.renderer.removeChild(divColor, divColor.lastChild);
      }

      const p = this.renderer.createElement('p');
      const text = this.renderer.createText('¡Copiado!');
      
    
      this.renderer.appendChild(p, text);
      this.renderer.appendChild(divColor, p);
      

    }
}

}
