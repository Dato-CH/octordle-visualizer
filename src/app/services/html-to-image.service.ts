import { Injectable, signal } from '@angular/core';
import html2canvas from 'html2canvas';

@Injectable({ providedIn: 'root' })
export class CaptureImageService {
  copying = signal(false);
  copied = signal(false);

  async captureAndCopy(target: HTMLElement) {
    try {
      this.copying.set(true);
      await new Promise(resolve => setTimeout(resolve, 150));

      const canvas = await html2canvas(target, {
        useCORS: true,
        scale: 2,
      });

      canvas.toBlob(async (blob) => {
        if (!blob) {
          console.error('Failed to create image blob');
          return;
        }

        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              [blob.type]: blob,
            }),
          ]);
          this.copying.set(false)
          this.copied.set(true);
          setTimeout(() => this.copied.set(false), 3000);
        } catch (err) {
          console.error('Clipboard write failed:', err);
        }
      }, 'image/png');
    } catch (err) {
      console.error('html2canvas failed:', err);
    }
  }
}
