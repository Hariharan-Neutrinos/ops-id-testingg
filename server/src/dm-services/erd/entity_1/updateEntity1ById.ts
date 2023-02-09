// _neu_generated_code__dont_modify_directly_
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
import { TracerService } from '../../../services/TracerService'; //_splitter_
import { validateRequest } from '../../../middleware/SchemaValidator'; //_splitter_
import { DmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class updateEntity1ById {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
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
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_updateEntity1ById_TimerStart
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
          let parentSpanInst = null;
          bh = await this.sd_RxwEtn13yQphuyb7(bh, parentSpanInst);
          //appendnew_next_sd_CJ3lIVGBHgmchbgb
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CJ3lIVGBHgmchbgb');
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

  async sd_RxwEtn13yQphuyb7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RxwEtn13yQphuyb7',
      parentSpanInst
    );
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'entity_1');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FDbjNXkSFwPpoKmy(bh, parentSpanInst);
      //appendnew_next_sd_RxwEtn13yQphuyb7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RxwEtn13yQphuyb7',
        spanInst,
        'sd_RxwEtn13yQphuyb7'
      );
    }
  }

  async sd_FDbjNXkSFwPpoKmy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FDbjNXkSFwPpoKmy',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_MsveiTdT4FSAQYZr');
      bh.result = await dmUtilsInst.updateById(
        '_EN_0yr9cbpxpn',
        bh.input.body.entity_1
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_IpUaU51q741upXgr(bh, parentSpanInst);
      //appendnew_next_sd_FDbjNXkSFwPpoKmy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FDbjNXkSFwPpoKmy',
        spanInst,
        'sd_FDbjNXkSFwPpoKmy'
      );
    }
  }

  async sd_IpUaU51q741upXgr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IpUaU51q741upXgr');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    throw e;
  }
  //appendnew_flow_updateEntity1ById_Catch
}
