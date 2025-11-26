import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  OnDestroy,
} from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, EffectCards } from 'swiper/modules';
import { SwiperConfig } from '../../core/models/swiper-config.model';
import { SwiperConfigService } from '../../core/services/swiper-config.service';
import { SwiperType } from '../../core/constants/const';

@Component({
  selector: 'app-swiper',
  templateUrl: 'swiper.component.html',
  styleUrl: 'swiper.component.scss',
})
export class SwiperComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) swiperType!: SwiperType;

  private swiper!: Swiper;
  private swiperConfigService = inject(SwiperConfigService);

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initConfig();
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

  initConfig() {
    const config = this.swiperConfigService.getConfig(this.swiperType);
    const swiperElement = this.el.nativeElement.querySelector('.swiper');
    this.swiper = new Swiper(swiperElement, {
      modules: this.getModules(config),
      ...config.options,
    });
  }

  private getModules(config: SwiperConfig) {
    const modules = [];
    if (config.autoplay) {
      modules.push(Autoplay);
    }
    if (config.pagination) {
      modules.push(Pagination);
    }
    if (config.navigation) {
      modules.push(Navigation);
    }
    if (config.effects) {
      modules.push(EffectCards);
    }
    return modules;
  }
}
