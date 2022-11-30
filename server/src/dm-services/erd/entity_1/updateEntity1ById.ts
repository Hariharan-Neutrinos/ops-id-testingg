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
import { validateRequest } from '../../../middleware/SchemaValidator'; //_splitter_
import { dmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class updateEntity1ById {
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
    this.serviceName = 'updateEntity1ById';
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
      instance = new updateEntity1ById(
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
      //appendnew_flow_updateEntity1ById_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: updateEntity1ById');

    //appendnew_flow_updateEntity1ById_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: updateEntity1ById');

    this.app['post'](
      `${this.serviceBasePath}/dm/erd/entity_1/update-by-id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      validateRequest(),
      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_W4nrA1LJuzxpoihy(bh);
          //appendnew_next_sd_ytwza2pBlxt4Wvcs
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ytwza2pBlxt4Wvcs');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_updateEntity1ById_HttpIn
  }
  //   service flows_updateEntity1ById

  //appendnew_flow_updateEntity1ById_start

  async sd_W4nrA1LJuzxpoihy(bh) {
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'entity_1');
      bh = await this.sd_FDbjNXkSFwPpoKmy(bh);
      //appendnew_next_sd_W4nrA1LJuzxpoihy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_W4nrA1LJuzxpoihy');
    }
  }

  async sd_FDbjNXkSFwPpoKmy(bh) {
    try {
      const dmUtilsInst = new dmUtils('sd_MsveiTdT4FSAQYZr');
      bh.result = await dmUtilsInst.updateById(
        '_EN_5xopnlx24l',
        bh.input.body.entity_1
      );

      bh = await this.sd_IpUaU51q741upXgr(bh);
      //appendnew_next_sd_FDbjNXkSFwPpoKmy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_N6r76GOkA7COsvwZ');
    }
  }

  async sd_IpUaU51q741upXgr(bh) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fB9Wzko3lUxArIZD');
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
  //appendnew_flow_updateEntity1ById_Catch
}
