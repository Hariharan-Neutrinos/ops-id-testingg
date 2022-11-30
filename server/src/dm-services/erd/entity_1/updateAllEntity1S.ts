let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../../middleware/Middleware'; //_splitter_
import * as settings from '../../../config/config'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { dmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class updateAllEntity1S {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'updateAllEntity1S';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new updateAllEntity1S(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_updateAllEntity1S_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: updateAllEntity1S');

    //appendnew_flow_updateAllEntity1S_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: updateAllEntity1S');

    this.app['post'](
      `${this.serviceBasePath}/dm/erd/entity_1/update-all`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_IoM5TAuwZaHzEz11(bh);
          //appendnew_next_sd_dD8C3uzHwTCrENzG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dD8C3uzHwTCrENzG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_updateAllEntity1S_HttpIn
  }
  //   service flows_updateAllEntity1S

  //appendnew_flow_updateAllEntity1S_start

  async sd_IoM5TAuwZaHzEz11(bh) {
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'entity_1');
      bh = await this.sd_8R9kDyRFeBfyGmoi(bh);
      //appendnew_next_sd_IoM5TAuwZaHzEz11
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IoM5TAuwZaHzEz11');
    }
  }

  async sd_8R9kDyRFeBfyGmoi(bh) {
    try {
      const dmUtilsInst = new dmUtils('sd_MsveiTdT4FSAQYZr');
      bh.result = await dmUtilsInst.updateByFilter(
        '_EN_5xopnlx24l',
        bh.filter,
        bh.input.body.entity_1
      );

      bh = await this.sd_IpUaU51q741upXgr(bh);
      //appendnew_next_sd_8R9kDyRFeBfyGmoi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VAKtIdMeWKUA6kis');
    }
  }

  async sd_IpUaU51q741upXgr(bh) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dH3E7LW1zwUoEWp8');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_updateAllEntity1S_Catch
}
